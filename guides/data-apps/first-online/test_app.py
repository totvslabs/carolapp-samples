"""Testa respostas HTTP do servidor real, sem conexão à plataforma."""

import http.client
import json
import os
from pathlib import Path
import socket
import subprocess
import sys
import tempfile
import time
import unittest


class OnlineExampleTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        with socket.socket() as probe:
            probe.bind(("127.0.0.1", 0))
            cls.port = probe.getsockname()[1]
        cls.log = tempfile.TemporaryFile(mode="w+")
        env = {k: v for k, v in os.environ.items() if not k.startswith("CAROL")}
        env["GREETING"] = "Olá, teste online!"
        cls.process = subprocess.Popen(
            [sys.executable, "-m", "gunicorn", "--config", "gunicorn.conf.py",
             "--bind", f"127.0.0.1:{cls.port}", "app:app"],
            cwd=Path(__file__).parent, env=env,
            stdout=cls.log, stderr=cls.log,
        )
        for _ in range(100):
            try:
                with socket.create_connection(("127.0.0.1", cls.port), timeout=.1):
                    return
            except OSError:
                if cls.process.poll() is not None:
                    break
                time.sleep(.1)
        cls.process.terminate()
        cls.process.wait(timeout=5)
        cls.log.seek(0)
        raise RuntimeError(cls.log.read())

    @classmethod
    def tearDownClass(cls):
        cls.process.terminate()
        cls.process.wait(timeout=5)
        cls.log.close()

    def request(self, path, method="GET"):
        conn = http.client.HTTPConnection("127.0.0.1", self.port, timeout=3)
        try:
            conn.request(method, path)
            response = conn.getresponse()
            body = response.read().decode("utf-8")
            return response.status, response.getheader("Content-Type"), body
        finally:
            conn.close()

    def test_health_does_not_require_authentication(self):
        status, content_type, body = self.request("/healthz")
        self.assertEqual(status, 200)
        self.assertIn("application/json", content_type)
        self.assertEqual(json.loads(body), {"status": "ok"})

    def test_configured_greeting_is_utf8(self):
        status, _, body = self.request("/")
        self.assertEqual(status, 200)
        self.assertEqual(json.loads(body), {"message": "Olá, teste online!"})
        self.assertIn("Olá", body)

    def test_unknown_route_returns_404(self):
        status, _, body = self.request("/inexistente")
        self.assertEqual(status, 404)
        self.assertEqual(json.loads(body), {"error": "not_found"})

    def test_post_is_not_accepted(self):
        status, _, _ = self.request("/", method="POST")
        self.assertEqual(status, 405)


if __name__ == "__main__":
    unittest.main()

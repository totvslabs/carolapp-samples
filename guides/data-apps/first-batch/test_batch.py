"""Confere o processo real e a prioridade das configurações, sem autenticação."""

import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest


SOURCE = Path(__file__).with_name("main.py")


class BatchExampleTest(unittest.TestCase):
    def run_batch(self, value=None, dotenv=None):
        with tempfile.TemporaryDirectory() as directory:
            script = Path(directory) / "main.py"
            shutil.copyfile(SOURCE, script)
            if dotenv:
                (script.parent / ".env").write_text(dotenv)
            env = {key: value for key, value in os.environ.items()
                   if not key.startswith("CAROL") and key not in ("ITEM_LIMIT", "LOG_LEVEL", "LONGTASKID")}
            if value is not None:
                env["ITEM_LIMIT"] = value
            return subprocess.run([sys.executable, str(script), "--local"],
                                  env=env, capture_output=True, text=True, timeout=60)

    def test_default_and_override(self):
        for value, total in [(None, 3), ("5", 5)]:
            with self.subTest(value=value):
                result = self.run_batch(value)
                self.assertEqual(result.returncode, 0, result.stderr)
                events = [json.loads(line) for line in result.stdout.splitlines()]
                self.assertEqual(events[-1], {"event": "completed", "total": total})
                self.assertEqual([event["item"] for event in events if event["event"] == "item_processed"],
                                 list(range(1, total + 1)))

    def test_invalid_configuration_fails(self):
        for value in ["0", "invalid"]:
            with self.subTest(value=value):
                result = self.run_batch(value)
                self.assertNotEqual(result.returncode, 0)
                self.assertNotIn('"event": "completed"', result.stdout)

    def test_dotenv_and_injected_environment_priority(self):
        for injected, total in [(None, 4), ("5", 5)]:
            with self.subTest(injected=injected):
                result = self.run_batch(injected, "ITEM_LIMIT=4\nLOG_LEVEL=INFO\n")
                self.assertEqual(result.returncode, 0, result.stderr)
                self.assertEqual(json.loads(result.stdout.splitlines()[-1])["total"], total)


if __name__ == "__main__":
    unittest.main()

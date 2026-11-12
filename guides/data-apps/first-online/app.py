"""API do guia online: sem dados de negócio nem credenciais."""

import os

from flask import Flask, jsonify

app = Flask(__name__)
app.json.ensure_ascii = False


@app.get("/")
def index():
    return jsonify(message=os.environ.get("GREETING", "Olá, Data Apps!"))


@app.get("/healthz")
def health():
    return jsonify(status="ok")


@app.errorhandler(404)
def not_found(error):
    return jsonify(error="not_found"), 404

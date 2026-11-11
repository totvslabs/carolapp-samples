"""Batch Python: configuração, Settings e logs; sem dados reais ou segredos."""

import argparse
import json
import logging
import os
from pathlib import Path
import sys

from dotenv import load_dotenv
from pycarol import Apps, Carol, CarolHandler, Tasks


def configure_logger(carol=None, task_id=None):
    logger = logging.getLogger("guide_batch")
    logger.setLevel(os.environ.get("LOG_LEVEL", "INFO").upper())
    logger.propagate = False
    formatter = logging.Formatter("%(message)s")
    console = logging.StreamHandler(sys.stdout)
    console.setFormatter(formatter)
    logger.addHandler(console)
    if carol is not None:
        handler = CarolHandler(carol, task_id=task_id)
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    return logger


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--local", action="store_true", help="Executa sem chamar a plataforma")
    args = parser.parse_args()

    # Ausência de .env é permitida. O ambiente injetado tem prioridade.
    load_dotenv(Path(__file__).with_name(".env"), override=False)
    limit = int(os.environ.get("ITEM_LIMIT", "3"))
    if limit < 1:
        raise ValueError("ITEM_LIMIT deve ser maior que zero")

    task = None
    settings = {}
    if args.local:
        logger = configure_logger()
    else:
        # A plataforma fornece o contexto; nenhum token é embutido na imagem.
        task_id = os.environ.get("LONGTASKID")
        if not task_id:
            raise RuntimeError("Use --local fora da plataforma ou configure o contexto autorizado")
        carol = Carol()
        logger = configure_logger(carol, task_id)
        settings = Apps(carol).get_settings()
        task = Tasks(carol)

    prefix = settings.get("message_prefix") or "Guia batch"
    logger.info(json.dumps({"event": "started", "total": limit, "local": args.local}))
    if task:
        task.set_progress(10)

    for item in range(1, limit + 1):
        logger.info(json.dumps({"event": "item_processed", "item": item, "message": prefix}))
    logger.info(json.dumps({"event": "completed", "total": limit}))
    if task:
        task.set_progress(100)


if __name__ == "__main__":
    main()

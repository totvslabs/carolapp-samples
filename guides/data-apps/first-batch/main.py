"""Processo batch do guia: lê uma configuração, processa itens e encerra."""

import json
import os


def main():
    limit = int(os.environ.get("ITEM_LIMIT", "3"))
    if limit < 1:
        raise ValueError("ITEM_LIMIT deve ser maior que zero")

    for item in range(1, limit + 1):
        print(json.dumps({"event": "item_processed", "item": item}), flush=True)
    print(json.dumps({"event": "completed", "total": limit}), flush=True)


if __name__ == "__main__":
    main()

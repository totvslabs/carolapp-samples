#!/bin/bash

#set -e
export PYTHONUNBUFFERED=1

echo "Running ${FILENAME}.py"
python "${FILENAME}.py"

if [ $? != 0 ]
then
    python /app/task_failed.py
    exit 1
fi

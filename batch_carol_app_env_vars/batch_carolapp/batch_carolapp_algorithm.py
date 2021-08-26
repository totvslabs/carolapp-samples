import os
import logging
import sys
import time
from pycarol import Carol, CarolHandler, Tasks, Apps

print("Connecting to Carol...")
carol_instance = Carol()

carol_handler = CarolHandler(carol_instance)

stdout_handler = logging.StreamHandler(sys.stdout)
stdout_handler.setFormatter(logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s'))

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
logger.addHandler(carol_handler)
logger.addHandler(stdout_handler)

tasks = Tasks(carol_instance)
task = tasks.get_task(os.environ['LONGTASKID'])

def run():
    logger.info('These are the environment variables:')

    for item, value in os.environ.items():
        logger.info(f'{item} -> {value}')

    time.sleep(30)

if __name__=="__main__":
    run()

import os
import logging
import sys
from pycarol import Carol, CarolHandler, Tasks

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
    logger.info('Running the method run...')

    task.set_progress(50)

    logger.warning('This is a warning message')
    logger.error('This is an error message')
    logger.critical('This is a critical message')

    logger.info('Completing the task...')

    task.set_progress(100)

if __name__=="__main__":
    run()

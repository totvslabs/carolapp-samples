import sys
import json
import random

from pycarol.app.online import Online
from pycarol.app.online_api import OnlineApi, request


online = Online()

@online.route("hello_world")
def hello_world():
    message = {
        'message': 'Hello World'
    }
    return message

@online.route("sum")
def sum():
    total = 0;
    print(request)

    param = request.json

    if(param != None):
        for key in param:
            try:
                total += float(param[key])
            except Exception:
                pass

    result = {
        'sum': total
    }
    return result


application = OnlineApi('alg_online_carolapp', 'online_carolapp.').get_api()


def main():
    """Runs from command prompt
    """
    if __name__ == "__main__":
        application.run(debug=True, host='0.0.0.0')


main()

Content
---

This project has a sample for the three types of Carol Apps: Online, Batch and Web.

All Carol Apps on this project have been created through the cookie-cutter project: https://docs.carol.ai/docs/carol-app-dev


Online Carol App
---

Language supported: python, nodeJS, and anything that can be embedded in a Docker Image.

Goal: Execute an application online. This kind of application will provide a custom back-end.


Batch Carol App
---

Language supported: python, nodeJS, and anything that can be embedded in a Docker Image.

Goal: Execute an application that will process the data in batch. The process can be scheduled to run automatically.


Web Carol App
---

Language supported: any HTML framework. On this example, we are sharing a sample using Portinari (https://portinari.io/).

Goal: Allow the Carol App to provide a customizable experience to the final user through Web technologies and frameworks.


Dynamic Report
---

Language supported: Python.

Goal: Create a simple web page using the Dash python library. The Dynamic Report runs like an online carol app with flask backend. The template is ready to execute the flask and dash servers, you just have to update the file dynamic-report/app/dashapp/dash_visualization.py with your code.

Dynamic Report - D3
---

Languages supported: Python and Html/Javascript.

Goal: Create an interactive data visualization web  [page](dynamic-report-d3/dynamicReportD3Preview.png), built on top of  [D3](https://d3js.org/)  (v5), [DC](https://dc-js.github.io/dc.js/) and [Crossfilter](https://square.github.io/crossfilter/). This Dynamic Report runs like an online Carol app with Flask backend. The template is ready to execute Flask and serve endpoints (available in app/webapp.py).


How to package the app?
---

To package and deploy the Carol App, please, follow the documentation https://docs.carol.ai/docs/carol-app-dev


Additional information
---

- Carol Documentation: docs.carol.ai
- Both Carol App (Online/Batch) need pyCarol (https://github.com/totvslabs/pyCarol).
- Python 3.6 is required for both Carol App (Online/Batch).

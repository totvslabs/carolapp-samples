Content
---

This project has a sample for the three types of Carol Apps: Online, Batch and Web.


Online Carol App
---

Language supported: python.

Goal: Execute an application online. This kind of application will provide a custom back-end.


Batch Carol App
---

Language supported: python.

Goal: Execute an application that will process the data in batch. The process can be scheduled to run automatically.

Web Carol App
---

Language supported: any HTML framework (T-Faces).

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

Carol App divide the resources into the three types:

### Web Carol app - folder structure

The Web resource, related to the Front-end, should be zipped, and the app content should be inside a folder named `site`, as follow:

```
site/
├── NunitoSans-Bold.51066f4d1d33630cd761.ttf
├── NunitoSans-ExtraLight.bc36a8726e20804a94da.ttf
├── NunitoSans-Regular.fb98ed1700e8dfaf0764.ttf
├── TotvsIcon.1642008454153acd9ef7.svg
├── TotvsIcon.4e1607e6f3f53fbb5e01.woff
├── TotvsIcon.683aa55aa3feb2d437b7.ttf
├── TotvsIcon.ab04e6bef307c5a4847d.eot
├── assets
│   ├── arrows
│   │   ├── arrow-down.png
│   │   ├── arrow-up.png
│   │   └── arrow-zero.png
│   ├── campaigns.png
│   ├── face.png
│   ├── flags
│   │   ├── EN.png
│   │   ├── PT.png
│   │   ├── china.png
│   │   ├── en-uk.png
│   │   └── spain.png
│   ├── general.png
│   ├── icon.png
│   ├── images
│   │   ├── order-ascending.svg
│   │   ├── order-descending.svg
│   │   ├── order-unselected.svg
│   │   ├── totvs-avatar-default.svg
│   │   ├── totvs-loading-icon.svg
│   │   ├── totvs-logo-grey.svg
│   │   ├── totvs-logo-menu.svg
│   │   └── totvs-logo-page-login.svg
│   ├── logo.png
│   └── zoom.png
├── favicon.ico
├── index.html
├── inline.bundle.js
├── inline.bundle.js.map
├── main.bundle.js
├── main.bundle.js.map
├── polyfills.bundle.js
├── polyfills.bundle.js.map
├── scripts.bundle.js
├── scripts.bundle.js.map
├── styles.bundle.js
├── styles.bundle.js.map
├── vendor.bundle.js
└── vendor.bundle.js.map
```


### Online Carol App - folder structure

The content of an Online Carol App should be zipped, and the app content should be inside a folder named `ai-script`, as follow:

```
ai-script
├── manifest.json
├── requirements.yml
└── run_me.py
```

### Batch Carol App - folder structure

```
ai-script/
├── logging.cfg
├── luigi.cfg
├── manifest.json
├── requirements.yml
└── test_script.py
```


Additional information
---

Both Carol App (Online/Batch) need pyCarol (https://github.com/totvslabs/pyCarol).
Python 3.6 is required for both Carol App (Online/Batch).

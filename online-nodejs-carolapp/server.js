'use strict';

var carol = require("./carol")
require("./utils")
const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
	res.send('Hello World\n<br><br> call <code>/data</code> to see Carol\'s integration!!!\n');
});

app.get('/data', (req, res) => {
	var variables = ["CAROLCONNECTORID", "CAROLAPPOAUTH", "CAROLDOMAIN", "CAROLTENANT", "LONGTASKID", "ENV_DOMAIN", "ALGORITHM_NAME"];
	var response = {};

	var domain = process.env["CAROLTENANT"];
	var url = process.env["ENV_DOMAIN"];
	var connectorId = process.env["CAROLCONNECTORID"];
	var token = process.env["CAROLAPPOAUTH"];

	console.info("domain: " + domain);
	console.info("token: " + token);
	console.info("connectorId: " + connectorId);

	for(var i=0; i<variables.length; i++) {
		var variable = variables[i];

		if(response["vars"] == undefined) {
			response["vars"] = [];
		}

		if(process.env[variable] != undefined && process.env[variable].length > 0) {
			var obj = {};
			obj[variable] = process.env[variable];

			response["vars"].push(obj);
		}

		console.info(variable + " => " + process.env[variable]);
	}

	response["message"] = 'Hello world';
	console.info('Hello world');

	var filter = {
	  "mustList": [
	    {
	      "mdmFilterType": "TYPE_FILTER",
	      "mdmValue": "mdmcustomerGolden"
	    }
	  ]
	};

	carol.filter(domain, {'token': token, 'connectorId': connectorId}, "MASTER", filter, 10, false, function(records) {
		response["data"] = records;

		res.json(response);
	});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

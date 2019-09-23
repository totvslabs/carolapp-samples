var querystring = require('querystring');
var request = require('https');
var zlib = require('zlib');
var carolenv = process.env.carol;
var server = (carolenv == 'explore' ? 'karol.ai' : (carolenv == 'qa' ? 'qarol.ai' : 'carol.ai'));
var suffixDomain = '.ai';
var accessToken = undefined;
var pass = require("./passwords.js");
require('request-to-curl');

function buildURL(domain) {
    var tenantObject = pass.envs.search({"tenantName": domain}).uniqueInstance();
    var cluster = server;

    if(tenantObject != undefined && tenantObject["cluster"] != undefined) {
        cluster = tenantObject["cluster"];
        cluster += suffixDomain;
    }

    return domain + '.' + cluster;
}

function adjustHeaders(accessToken, httpHeaders) {
    if(typeof accessToken == 'string') {
        httpHeaders['Authorization'] = accessToken;
    }
    else if(typeof accessToken == "object") {
        httpHeaders['X-Auth-Key'] = accessToken["token"];
        httpHeaders['X-Auth-ConnectorId'] = accessToken["connectorId"];
    }
}

exports.authentication = function(domain, username, password, callback, noerror=false) {
    var applicationToken = '0a0829172fc2433c9aa26460c31b78f0';
    var tenantObject = pass.envs.search({"tenantName": domain}).uniqueInstance();

    var url = buildURL(domain);

    var jsonObject = querystring.stringify({
        grant_type : 'password',
        username : username,
        password: password,
        subdomain: domain,
        applicationId: applicationToken
    });

    if(tenantObject != undefined && tenantObject.organization != undefined) {
        jsonObject["orgSubdomain"] = tenantObject["organization"];
    }

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        host: url,
        'Content-Length' : Buffer.byteLength(jsonObject)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/oauth2/token',
        method : 'POST',
        headers : postheaders,
        agent: false
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            console.info();
            console.info(reqPost.toCurl());
            console.info();

            var result = JSON.parse(body);

            accessToken = result.access_token;

            if(!noerror && accessToken == undefined) {
                console.info("Something went wrong during the loging, verify the cluster you are working on right now: ");
                console.info(JSON.stringify(result));
            }

            callback(accessToken);
        });
    });

    // write the json data
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('error', function(e) {
    });
}

exports.stagingMappingPublish = function(domain, accessToken, connectorId, entityMappingId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/connectors/' + connectorId + '/entityMappings/' + entityMappingId + '/publish',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.stagingMappingLoadSnapshot = function(domain, accessToken, connectorId, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/connectors/' + connectorId + '/entityMappings/snapshot',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.stagingMappingGetSnapshot = function(domain, accessToken, connectorId, entityMappingId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/connectors/' + connectorId + '/entityMappings/' + entityMappingId + '/snapshot?entitySpace=PRODUCTION',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModelLoadSnapshot = function(domain, accessToken, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/entities/templates/snapshot',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModelPublish = function(domain, accessToken, dataModelId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/entities/templates/' + dataModelId + '/publish',
        method : 'POST',
        headers : postheaders
    };
    
    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModelGetViews = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/relationshipView?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModelGetRelationships = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/relationship/mapping?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModePostRelationship = function(domain, accessToken, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/relationship/mapping',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModelGetRelationship = function(domain, accessToken, datamodelName, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/relationship/mapping/direct/name/' + datamodelName + '?entitySpace=PRODUCTION',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModelReprocessView = function(domain, accessToken, dataModelId, relationshipMapping, relationshipView, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/goldenRecordView/reprocess?entityTemplateId=' + dataModelId + '&relationshipMappingId=' + relationshipMapping + '&relationshipViewId=' + relationshipView,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            console.info("curl command: " + reqPost.toCurl());

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dataModelCDS = function(domain, accessToken, dataModelId, fullExport, deletePrevious, enable, callback) {
    var url = buildURL(domain);

    var status = "RUNNING";

    if(!enable) {
       status = "PAUSED";
    }

    var postheaders = {
        accept : 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/admin/entities/templates/' + dataModelId + '/exporter?status=' + status + '&fullExport=' + fullExport + '&format=PARQUET&deletePrevious=' + deletePrevious,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.runNamedQuery = function(domain, accessToken, objParam, namedQueryName, pageSize, callback, everything, index_p='MASTER', sortBy='', sortOrder='') {
    var url = buildURL(domain);

    var data = JSON.stringify(objParam);
    var index = index_p;

    var postheaders = {
        'accept' : 'application/json',
        'content-type': 'application/json',
        'host': url,
        'authorization': accessToken,
        'content-length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/queries/named/' + namedQueryName + '?pageSize=' + pageSize + '&indexType=' + index + "&scrollable=false&sortBy=" + sortBy + "&sortOrder=" + sortOrder,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            if(body.trim().length == 0) {
                callback(undefined);
            }
            else {
                body = JSON.parse(body);

                if(callback != undefined) {
                    if(everything) {
                        callback(body);
                    }
                    else {
                        callback(body.hits);
                    }
                }
            }

            console.info("curl command: ");
            console.info(reqPost.toCurl());
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.connectorCreate = function(domain, accessToken, name, group, data, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/connectorFeeds/create?connectorName=' + name + '&groupName=' + group,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.namedQueryLoad = function(domain, accessToken, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v2/named_queries',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.sendData = function(domain, accessToken, connectorId, stagingTable, data, callback, intake=false) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v2/staging/tables/' + stagingTable + '?returnData=false&connectorId=' + connectorId,
        method : 'POST',
        headers : postheaders
    };

    if(intake) {
        optionspost["path"] = '/api/v2/staging/intake/' + stagingTable + '?returnData=false&connectorId=' + connectorId;
    }

    var reqPost = request.request(optionspost, function(res) {
        res.on('data', function(d) {
            console.info('Carol responded with status code: ' + res.statusCode + ', statusMessage: ' + res.statusMessage);

            if(res.statusCode != 200) {
                console.info("sending to carol: " + d);
            }
        });

        res.on('end', function(d) {
            if(callback != undefined) {
                callback(res);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.sendDataGzip = function(domain, accessToken, connectorId, stagingTable, data, callback) {
    var url = buildURL(domain);

    var buf = new Buffer(data, 'latin1'); // Choose encoding for the string.

    zlib.gzip(buf, function (_, result) {
        var postheaders = {
            accept : 'application/json',
            'Content-Encoding' : 'gzip',
            'Content-Type': 'application/json',
            host: url,
            Authorization: accessToken,
            'Content-Length' : Buffer.byteLength(result)
        };

        var optionspost = {
            host : url,
            port : 443,
            path : '/api/v2/staging/tables/' + stagingTable + '?returnData=false&connectorId=' + connectorId,
            method : 'POST',
            headers : postheaders
        };

        var reqPost = request.request(optionspost, function(res) {
            res.on('data', function(d) {
                console.info('Carol responded with status code: ' + res.statusCode + ', statusMessage: ' + res.statusMessage);

                if(res.statusCode != 200) {
                    console.info("sending to carol (response): " + d);
                }
            });

            res.on('end', function(d) {
                if(callback != undefined) {
                    callback(res);
                }
            });
        });

        reqPost.on('error', function(e) {
            console.error(e);
        });

        reqPost.write(result);
        reqPost.end();

        reqPost.on('error', function(e) {
            console.error(e);
        });
    });
}

exports.setStagingSchema = function(domain, accessToken, connectorId, stagingTableName, schema, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v2/staging/tables/' + stagingTableName + '/schema?connectorId=' + connectorId,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(schema);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.getDatamodelSchema = function(domain, accessToken, datamodelId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/entities/templates/' + datamodelId + '/snapshot?entitySpace=PRODUCTION',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.getStagingSchema = function(domain, accessToken, connectorId, stagingTableName, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v2/staging/tables/' + stagingTableName + '/schema?connectorId=' + connectorId,
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.getETLConfigurations = function(domain, accessToken, connectorId, stagingTableName, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/etl/connector/' + connectorId + '/sourceEntity/' + stagingTableName,
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getETLConfigurationSnapshot = function(domain, accessToken, etlConfigurationID, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/etl/' + etlConfigurationID + '/snapshot',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.postETLConfigurationSnapshot = function(domain, accessToken, connectorId, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/etl/connector/' + connectorId,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.postETLConfigurationPublish = function(domain, accessToken, etlConfiguration, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/etl/' + etlConfiguration + '/publish',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.getStagingETL = function(domain, accessToken, connectorId, stagingTableName, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/etl/connector/' + connectorId + '/sourceEntity/' + stagingTableName,
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getDatamodels = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/entities/templates/published?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getDatamodelByName = function(domain, accessToken, dataModelName, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/entities/templates/name/' + dataModelName + '/',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getDatamodel = function(domain, accessToken, dataModelId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/entities/templates/' + dataModelId + '/published',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getNamedQuery = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v2/named_queries?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.deleteNamedQuery = function(domain, accessToken, namedQuery, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v2/named_queries/name/force/' + namedQuery + "?force=true",
        method : 'DELETE',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                console.info(JSON.stringify(body));
                callback(body.success);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getConnectorMappings = function(domain, accessToken, connectorId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/connectors/' + connectorId + '/entityMappings?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getConnectorEntityMapping = function(domain, accessToken, connectorId, entityMapping, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/connectors/' + connectorId + '/entityMappings/' + entityMapping,
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getConnectorByName = function(domain, accessToken, connectorName, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/connectors/name/' + connectorName,
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.postConnector = function(domain, accessToken, connectorLabel, connectorName, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify({
        "mdmLabel": {
          "en-US": connectorLabel
        },
        "mdmName": connectorName,
        "mdmProjectName": "NodeJS lib"
      });

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/connectors',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getCarolAppSubscriptions = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/carolAppSubscriptions?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.carolAppSubscriptions = function(domain, accessToken, customerDomainId, carolAppId, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify({
                  "mdmCarolAppId": carolAppId,
                  "mdmCustomerTenantId": customerDomainId
                });

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/carolAppSubscriptions',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.taskProgress = function(domain, accessToken, taskId, progress, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify({});

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        "authorization": accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tasks/' + taskId + '/progress/' + progress,
        method : 'POST',
        headers : postheaders
    };
    
    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            try {
                body = JSON.parse(body);
            }
            catch(e) {
            }
            finally {
                if(callback != undefined) {
                    callback(body);
                }
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.taskCancel = function(domain, accessToken, taskId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tasks/' + taskId + '/cancel&force=true',
        method : 'POST',
        headers : postheaders
    };
    
    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            try {
                body = JSON.parse(body);
            }
            catch(e) {
            }
            finally {
                if(callback != undefined) {
                    callback(body);
                }
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.runTaskSync = function(domain, accessToken, taskId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tasks/' + taskId + '/sync',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            try {
                body = JSON.parse(body);
            }
            catch(e) {
            }
            finally {
                if(callback != undefined) {
                    callback(body);
                }
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getTasks = function(domain, accessTokem, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify({
                  "mustList": [
                    {
                      "mdmFilterType": "TYPE_FILTER",
                      "mdmValue": "mdmTask"
                    },
                    {
                      "mdmKey": "mdmTaskType.raw",
                      "mdmFilterType": "TERMS_FILTER",
                      "mdmValue": [
                        "DROP_STAGING_TABLE",
                        "DELETE_STAGING_RECORDS",
                        "DELETE_ENTITY_TEMPLATE",
                        "REPROCESS_SEARCH_RESULT",
                        "INSTALL_CAROL_APP",
                        "EXPORT_SEARCH_RESULT",
                        "AI_PROCESS",
                        "DEPLOY_CAROL_APP"
                      ]
                    }
                  ]
                });

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/queries/filter?pageSize=-1&indexType=MASTER',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.pendingTasks = function(domain, accessTokem, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify({
                  "mustList": [
                    {
                      "mdmFilterType": "TYPE_FILTER",
                      "mdmValue": "mdmTask"
                    },
                    {
                      "mdmKey": "mdmTaskType.raw",
                      "mdmFilterType": "TERMS_FILTER",
                      "mdmValue": [
                        "DROP_STAGING_TABLE",
                        "DELETE_STAGING_RECORDS",
                        "DELETE_ENTITY_TEMPLATE",
                        "REPROCESS_SEARCH_RESULT",
                        "INSTALL_CAROL_APP",
                        "EXPORT_SEARCH_RESULT",
                        "AI_PROCESS",
                        "DEPLOY_CAROL_APP"
                      ]
                    },
                    {
                      "mdmKey": "mdmTaskStatus.raw",
                      "mdmFilterType": "TERMS_FILTER",
                      "mdmValue": [
                        "READY"
                      ]
                    }
                  ]
                });

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/queries/filter?pageSize=-1&indexType=MASTER',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.runningTasks = function(domain, accessTokem, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify({
                  "mustList": [
                    {
                      "mdmFilterType": "TYPE_FILTER",
                      "mdmValue": "mdmTask"
                    },
                    {
                      "mdmKey": "mdmTaskType.raw",
                      "mdmFilterType": "TERMS_FILTER",
                      "mdmValue": [
                        "DROP_STAGING_TABLE",
                        "DELETE_STAGING_RECORDS",
                        "DELETE_ENTITY_TEMPLATE",
                        "REPROCESS_SEARCH_RESULT",
                        "INSTALL_CAROL_APP",
                        "EXPORT_SEARCH_RESULT",
                        "AI_PROCESS",
                        "DEPLOY_CAROL_APP"
                      ]
                    },
                    {
                      "mdmKey": "mdmTaskStatus.raw",
                      "mdmFilterType": "TERMS_FILTER",
                      "mdmValue": [
                        "RUNNING"
                      ]
                    }
                  ]
                });

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/queries/filter?pageSize=-1&indexType=MASTER',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getStagingSampleData = function(domain, accessToken, connectorId, stagingTableName, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/staging/entities/connectors/' + connectorId + '/types/' + stagingTableName + '/search?pageSize=1000',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getStagingData = function(domain, accessToken, connectorId, stagingTableName, pageSize, offset, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/staging/entities/connectors/' + connectorId + '/types/' + stagingTableName + '/search?pageSize=' + pageSize + '&offset=' + offset,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.setTenantAppConfig = function(domain, accessToken, jsonObject, callback) {
    var url = buildURL(domain);

    var mdmId = jsonObject.mdmId;
    var jsonObject = JSON.stringify(jsonObject);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        'Content-Length' : Buffer.byteLength(jsonObject),
        "Authorization": accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/appTenants/' + mdmId,
        method : 'PUT',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    // write the json data
    reqPost.write(jsonObject);
    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getTenantAppConfig = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/appTenants',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getTenantById = function(domain, accessToken, tenantId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/admin/tenants/' + tenantId,
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getTenant = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v2/tenants/domain/' + domain,
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
        callback(undefined);
    });
}

exports.getTenants = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/admin/tenantsAdmin?pageSize=5000',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getStagingTables = function(domain, accessToken, connectorId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/connectors/' + connectorId + '/stats',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.aggs[connectorId].stagingEntityStats);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.install = function(domain, carolAppId, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tenantApps/' + carolAppId + '/install',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.subscribe = function(domain, carolAppId, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tenantApps/subscribe/carolApps/' + carolAppId,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            if(body != undefined && body.trim.length > 0)
                body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getTenantCarolApps = function(domain, accessToken, callback, overriddentenantid=undefined) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    if(overriddentenantid != undefined) {
        postheaders["overriddentenantid"] = overriddentenantid;
    }

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tenantApps?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}


exports.getCarolApps = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/carolApps?entitySpace=PRODUCTION&allVersions=true&pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            try {
                body = JSON.parse(body);
            }
            catch(e) {
                console.info("Error parsing the text: ");
                console.info(body);
            }

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getCarolApp = function(domain, accessToken, appName, appVersion, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/carolApps/name/' + appName + '?version=' + appVersion + '&checkAllSpaces=true',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            try {
                body = JSON.parse(body);
            }
            catch(e) {
                console.info("Error parsing the text: ");
                console.info(body);
            }

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getsubscribableCarolApps = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tenantApps/subscribableCarolApps',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getapprovedCarolApps = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/tenantApps/approved',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getCarolAppApprove = function(domain, accessToken, carolAppId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/carolApps/' + carolAppId + '/approve',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getConnectors = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/connectors?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.filterScroll = function(domain, accessToken, index, scrollId, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/queries/filter/' + scrollId + '?indexType=' + index + "&scrollTTLMins=5",
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.filter = function(domain, accessToken, index, filter, size, scrollable, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify(filter);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        'Content-Length' : Buffer.byteLength(data)
    };

    adjustHeaders(accessToken, postheaders);

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/queries/filter?pageSize=' + size + '&indexType=' + index + "&scrollable=" + scrollable,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.quantityRecords = function(domain, dataModelName, type, size, accessTokem, callback) {
    var url = buildURL(domain);

    var data = JSON.stringify({
                  "mustList": [
                    {
                      "mdmFilterType": "TYPE_FILTER",
                      "mdmValue": dataModelName + type
                    }
                  ]
                });

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var index = ((type == 'Rejected' || type == '') ? 'STAGING' : 'MASTER');

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/queries/filter?pageSize=' + size + '&indexType=' + index,
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.unsubscribeMoM = function(domain, dataModel, tenantOrigin, tenantDestination, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        "Authorization": accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/masterOfMasters/unsubscribe?tenantName=' + tenantDestination + '&tenantUnsubscribingFrom=' + tenantOrigin + '&dataModelUnsubscribingFrom=' + dataModel,
        method : 'PUT',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        res.on('data', function(d) {
            var result = JSON.parse(d);

            callback(result);
        });
    });

    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.subscribeMoM = function(domain, dataModel, tenantOrigin, tenantDestination, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        "Authorization": accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/masterOfMasters/subscribe?tenantName=' + tenantDestination + '&tenantSubscribingTo=' + tenantOrigin + '&dataModelSubscribingTo=' + dataModel,
        method : 'PUT',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        res.on('data', function(d) {
            var result = JSON.parse(d);

            callback(result);
        });
    });

    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.createTenant = function(domain, accessToken, callback, description="labs--workshop") {
    var url = buildURL(domain);

    var data = JSON.stringify({
        "mdmName":domain,
        "mdmDescription":{"en-US":description},
        "mdmSubdomain":domain,
        "mdmWhiteListDomains":["*"],
        "mdmEnableAddressCleansing":true,
        "mdmStopProcessing":false});

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/admin/tenantsAdmin',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.deleteTenant = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        host: url,
        Authorization: accessToken
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/admin/tenantsAdmin/' + domain,
        method : 'DELETE',
        headers : postheaders
    };
    
    var reqPost = request.request(optionspost, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.inviteTenant = function(domain, tenantId, email, accessToken, callback) {
    var url = buildURL(domain);

    var data = "inviteType=mdmAdminInvite&email=" + email + "&url=https://" + domain + "/carol-ui/register?&roleNames=tenantAdmin";
//    var data = "inviteType=mdmAdminInvite&email=robson.poffo%40totvs.com.br&url=https%3A%2F%2Frob2.carol.ai%2Fmdm-ui%2F%23%2Fregister%3F&roleNames=tenantAdmin";

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        host: url,
        Authorization: accessToken,
        overriddentenantid: tenantId,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/users/invites',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
}

exports.getUsers = function(domain, accessToken, callback, overrideTenant, pageSize=-1, offset=0) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    if(overrideTenant != undefined) {
        postheaders["overRiddenTenantId"] = overrideTenant;
    }

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/users?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(body["errorCode"] != undefined && body["errorCode"] != 200) {
                console.info(body);
            }

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.putUser = function(domain, accessToken, userId, userObj, callback, overrideTenant) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    if(overrideTenant != undefined) {
        postheaders["overRiddenTenantId"] = overrideTenant;
    }

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/users/' + userId,
        method : 'PUT',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.write(JSON.stringify(userObj));
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.postUser = function(domain, accessToken, userObj, callback, overrideTenant) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url
    };

    if(accessToken != undefined) {
        postheaders["Authorization"] = accessToken;
    }

    if(overrideTenant != undefined) {
        postheaders["overRiddenTenantId"] = overrideTenant;
    }

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/users/',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    console.info(JSON.stringify(userObj));
    console.info();

    reqPost.write(JSON.stringify(userObj));
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.deleteUser = function(domain, accessToken, userId, callback, overrideTenant) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    if(overrideTenant != undefined) {
        postheaders["overRiddenTenantId"] = overrideTenant;
    }

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/users/' + userId,
        method : 'DELETE',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.getNlpTenantConfig = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/ai/skillConfig',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.postNlpTenantConfig = function(domain, accessToken, config, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(config)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/ai/skillConfig',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(config);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.putNlpTenantConfig = function(domain, accessToken, config, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(config)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/ai/skillConfig',
        method : 'PUT',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(config);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.getSkills = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/ai/skill?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.nlpEntitiesPost = function(domain, accessToken, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/ai/skillEntity',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.nlpQuery = function(domain, accessToken, query, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(query)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/ai/nlp/query',
        method : 'POST',
        headers : postheaders
    };

    console.info("Request: ");
    console.info(JSON.stringify(optionspost));
    console.info();
    console.info("Query: ");
    console.info(query);
    console.info();

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(query);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dashboardPost = function(domain, accessToken, title, callback) {
    var url = buildURL(domain);

    var data = {
      "mdmAccessType": "EVERYONE",
      "mdmAccessibleFromMobile": true,
      "mdmConfigLabel": title,
      "mdmDashboardConfiguration": "{}",
      "mdmInsightConfigurationIds": []
    }

    data = JSON.stringify(data);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/dashboard/configuration',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.dashboardAddInsight = function(domain, accessToken, dashboardId, data, callback) {
    var url = buildURL(domain);
    data = JSON.stringify(data);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(data)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/dashboard/configuration/' + dashboardId,
        method : 'PUT',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(data);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.insightsPost = function(domain, accessToken, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/insight/configuration',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.nlpSkillsPost = function(domain, accessToken, snapshot, callback) {
    var url = buildURL(domain);

    var postheaders = {
        accept : 'application/json',
        'Content-Type': 'application/json',
        host: url,
        Authorization: accessToken,
        'Content-Length' : Buffer.byteLength(snapshot)
    };

    var optionspost = {
        host : url,
        port : 443,
        path : '/api/v1/ai/skill',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = request.request(optionspost, function(res) {
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body);
            }
        });
    });

    reqPost.write(snapshot);
    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};

exports.getSkillEntities = function(domain, accessToken, callback) {
    var url = buildURL(domain);

    var postheaders = {
        "accept" : "application/json",
        "content-type": "application/json",
        "host": url,
        "Authorization": accessToken
    };

    var optionsHeader = {
        host : url,
        port : 443,
        path : '/api/v1/ai/skillEntity?pageSize=-1',
        method : 'GET',
        headers : postheaders
    };

    var reqPost = request.request(optionsHeader, function(res) {
        res.setEncoding("utf8");
        let body = "";

        res.on('data', function(data) {
            body += data;
        });

        res.on('end', function(d) {
            body = JSON.parse(body);

            if(callback != undefined) {
                callback(body.hits);
            }
        });
    });

    reqPost.end();

    reqPost.on('error', function(e) {
        console.error(e);
    });
};


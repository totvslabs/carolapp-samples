var childProcess = require('child_process');

Array.prototype.search = function(obj) {
    return this.filter(function(item) {
        for (var prop in obj)
            if (!(prop in item) || obj[prop] !== item[prop])
                 return false;
        return true;
    });
};

Array.prototype.uniqueInstance = function() {
    if(this.length == 1) {
      return this[0];
    }

    return undefined;
}

Array.prototype.getFirst = function() {
    if(this.length > 0) {
      return this[0];
    }

    return undefined;
}

exports.readParameter = function (paramName) {
    var paramIndex = process.argv.indexOf(paramName);

    if(paramIndex != -1) {
        return process.argv[paramIndex+1];
    }

    return undefined;
}

exports.hasParameter = function (paramName) {
    var paramIndex = process.argv.indexOf(paramName);

    if(paramIndex != -1) {
        return true;
    }

    return false;
}

exports.pbcopy = function(data) {
    var proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(data);
    proc.stdin.end();
}

exports.runScript = function(scriptPath, params, callback) {
    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath, params);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

exports.pbcopy = function(data) {
    var proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(data);
    proc.stdin.end();
}
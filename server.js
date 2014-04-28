(function() {
    'use strict';

    var express = require('express');
    var app = express();

    app.use(express.static(__dirname + '/public'));

    app.get('/resolve', function(req, res) {
        setTimeout(function() {
            res.send('Hello World');
        }, 5000);
    });

    app.listen(8080);
})();
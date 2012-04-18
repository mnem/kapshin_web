var express = require('express');
var app = express.createServer();

app.use(express.static(__dirname + '/public'));

app.get('/*', function(req, res, next){
    next();
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    return console.log("Listening on " + port);
});

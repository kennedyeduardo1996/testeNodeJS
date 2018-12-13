var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    var page = 'index.html';
     if(request != '/'){

    }
    response.writeHead(200,{'Content-type':'text/html; charset=utf-8'});
    response.write('<h1>Hello Word dwe</h1>');
    response.end();
});

server.listen(3000);
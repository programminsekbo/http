var http = require('http');

var server = http.createServer(function(req,res){

    res.end('hello word')

})

server.listen(8750);
console.log('i m find')
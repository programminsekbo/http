
var http = require('http');
var URL = require('url');


var server = http.createServer(function(req,res){
 var myOne = "http://rabbil.com/blog.html?year=2020&month=july"

 var myobjat =URL.parse(myOne.true);

 var myF=myobjat.host;
 var myB=myobjat.pathname;
 var myc=myobjat.search;
 write(myB)




})

server.listen(8750);
console.log('i m find')
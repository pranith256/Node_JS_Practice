var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    // var readStream = fs.createReadStream(__dirname+'/index.html','utf8');
    // var writeStream = fs.createWriteStream(__dirname+'/writeStream1.txt')
    var myObj = {
        name:'Pranith',
        place : 'California',
        age : 24
    }
    res.end(JSON.stringify(myObj))
})

server.listen(3002,'127.0.0.1');

console.log('Listening to port 3002')
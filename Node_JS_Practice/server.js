var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var readStream = fs.createReadStream(__dirname+'/index.html','utf8');
    var writeStream = fs.createWriteStream(__dirname+'/writeStream1.txt')
    readStream.pipe(res)
})

server.listen(3001,'127.0.0.1');

console.log('Listening to port 3001')
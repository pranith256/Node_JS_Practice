var fs=require('fs')
var http = require('http')

var server = http.createServer(function(req, res){
    console.log('request made for '+req.url)
    if(req.url === '/home' || req.url ==='/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.createReadStream(__dirname+'/index.html').pipe(res)
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.createReadStream(__dirname+'/contact.html').pipe(res)
    }
    else if(req.url === '/data'){
        var data = [{name:"Bunt",age:24},{name:"nick",age:25},{name:"cunt",age:26}]
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(data))
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.createReadStream(__dirname+'/404.html').pipe(res)
    }
})

server.listen(3004,'127.0.0.1');
console.log('listening to port 3004')

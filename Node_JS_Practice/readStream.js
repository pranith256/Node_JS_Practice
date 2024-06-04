var fs = require('fs')


var readStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
var writeStream = fs.createWriteStream(__dirname+'/writeStream1.txt')

readStream.pipe(writeStream)

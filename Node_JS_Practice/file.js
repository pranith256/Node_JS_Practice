var fs=require('fs/promises');


    fs.readFile('readMe.txt','utf8',function(err, data){
        fs.writeFile('./File/writeMef.txt',data)
    })
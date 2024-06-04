This is a Repository of Node.js Notes :

I have learnt different concepts in Node.js by implementing this module.

To emit the events : 
1. add the event to the respective object using Object.on('event',function(){})
2. then emit those events when the action is trigerred Object.emit('action', function(){})

Reading and writing to the file : 
1. readFileSync, writeFileSync

Client - Server model 

Buffer streams :
1. readStream writeStream
2. readStreamSync, writeStreamSync - supports callback

Routing using express middleware, and rendering the HTML templates files as responses .

CRUD operation : GET, POST, DELETE, PUT 

connecting to MongoDB via mongoose. 

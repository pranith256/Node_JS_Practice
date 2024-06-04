var events = require('events');
var util = require('util');
var Person = function(name){
    this.name = name
};

util.inherits(Person, events.EventEmitter)

var nick = new Person("nick");
var bunt = new Person("bunt");
var cunt = new Person("cunt");
var peeps = [nick,bunt,cunt];

peeps.forEach((person)=>{
    person.on('onSpeak',function(mssg){
        console.log(`${person.name} said ${mssg}`)
    })
})

nick.emit('onSpeak','Hi folks')

var express = require('express')
var bodyParser = require('body-parser')
var app = express()


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index')
})

app.get('/contact',function(req, res){
    
    res.render('contact', {qs: req.query})
})

app.post('/contact',urlencodedParser, function(req, res){
    console.log(req.body)
    res.render('form-success', {data:req.body})
})



app.get('/profile/:id/:name',function(req,res){
    var hobbies = ['eating', 'writing', 'coding']
    res.render('profile',{name : req.params.name, id: req.params.id, hobbies: hobbies})
});


app.listen(3000)

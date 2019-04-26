var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static( __dirname + '/public'));
app.use(express.static( __dirname + '/assets'));
app.use(express.static( __dirname + '/images'));

app.get('/', function(req, res){
    res.render('index');
})

app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log('Server has been started');
})
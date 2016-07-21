var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Login = require('./routes/Login');
var todos = require('./routes/todos');
var app = express();
app.use('/public',express.static(path.join(__dirname, 'public')));
//app.set('views',path.join(__dirname, 'views'));
app.set('views',path.join(__dirname, 'public/views/main'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//app.use(Login);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    next();
});
app.use("/user",user);
app.use(todos);


app.listen(1337,function(){
console.log('ready on port 1337');
});

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var routes = require('./routes/index');
var hotel_routes = require('./routes/hotel');
var admin_routes = require('./routes/admin');
var user_routes = require('./routes/user');
 
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

//app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser());

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

 
app.use(session({
    secret: '12345',
     name: 'testapp',
     cookie: {maxAge: 80000 },
     resave: false,
     saveUninitialized: true
}));

app.use(function(req, res, next) {
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

app.use('/', routes);
app.use('/hotel', hotel_routes);
app.use('/admin', admin_routes);
app.use('/user',user_routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
 
module.exports = app;

app.listen(process.env.PORT || 3000);

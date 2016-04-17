var express = require('express');
var user_routes = express.Router();
//var auth = require('../midlewares/auth.js');
var api = require('../api');

user_routes.get('/u_login', function(req, res, next){
    if (req.session.err) {
        var msg = req.session.err;
      console.log(req.session);
        req.session.err = null;
        res.render('user/u_login', {
            message: msg
        });

    } else {
        res.render('user/u_login',{title : "Welcome to together"});
    }
}
    );

user_routes.post('/u_login',function(req, res){
    var username = req.body['username'],
        password = req.body['password'];
        //console.log(req.body);
    var flag = 0;
    api.user_find(username, function (err, results) {        
    if (results.length == 0) {
        res.locals.error = 'User id not find ! Please try again.' ;
        res.render('user/u_login', {title : "Welcome to together"});
        flag = 1;
        //console.log('11');
        return;
    }

    else if (err) {
        res.locals.error = 'Something wrong ! Please try again.' ;
        res.render('user/u_login', {title : "Welcome to together"});
        flag = 1;
        //console.log("22");
        return;
      }
  });

    if(flag == 1)
        return;

    api.user_login(username,password,function(err, results){
        if(results.length == 0)
        {
            res.locals.error = 'Password is wrong ! Please try again.' ;
            res.render('user/u_login', {title : "Welcome to together"});
            return;
        //console.log("22");
        }
        else {
            req.session.userid = username;
            req.session.username = results[0].customer_name;
            req.session.usertype = "user";
            console.log(req.session);
            res.render('user/u_backend' , {title : "Hi "+ req.session.username + " !"});
        }
});
});

user_routes.get('/u_signup', function(req, res) {
    res.render('user/u_signup', {title : "Sign up for together"});
});

user_routes.post('/u_signup', function(req, res) {
  var username = req.body['username'],
      password = req.body['password'],
      password_c = req.body['password_confirm'],
      tel = req.body['tel'], 
      email = req.body['email'],
      name = req.body['name']; 
      console.log(req.body);

   if(password!=password_c)
    {
        //res.redirect('/user/u_signup', {title : "Sign up for together"});
        res.locals.error = 'Please keep the passwords the same ! ' ;
        //res.redirect('user/u_signup', {title : "Sign up for together"});
        res.render('user/u_signup', {title : "Sign up for together"});
        return;
    }

  //检查用户名是否已经存在
    api.user_find(username, function (err, results) {        
             //console.log(results.length===0);
    if (results.length != 0) {
        res.locals.error = 'User id already be used !' ;
        res.render('user/u_signup', {title : "Sign up for together"});
        //console.log('11');
        return;
    }

    else if (err) {
        res.locals.error = 'User id already be used !' ;
        res.render('user/u_signup', {title : "Sign up for together"});
        //console.log("22");
        return;
      }

    api.user_signup(username, password, tel, name, email);
    res.locals.success = 'Signup successfully !  <a class="btn btn-link" href="/user/u_login" role="button"> Sign in </a>' ;
    res.render('user/u_signup', {title : "Sign up for together"});
    return; 
    });
});

user_routes.get('/u_backend', function(req, res) {
    if(req.session.usertype != "user")
    {
        res.redirect('/', {title : "Together"});
    }
    res.render('user/u_backend' , {title : "Hi "+ req.session.username + " !"});
});

module.exports = user_routes;
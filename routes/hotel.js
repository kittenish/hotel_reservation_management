var express = require('express');
var hotel_routes = express.Router();
var api = require('../api');

hotel_routes.get('/h_login', function(req, res, next){
    if (req.session.err) {
        var msg = req.session.err;
      console.log(req.session);
        req.session.err = null;
        res.render('hotel/h_login', {
            message: msg
        });

    } else {
        res.render('hotel/h_login',{title : "Welcome to together"});
    }
}
    );

hotel_routes.post('/h_login',function(req, res){
    var hotelid = req.body['hotelid'],
        password = req.body['password'];
        console.log(req.body);
    var flag = 0;
    
    api.hotel_find(hotelid, function (err, results) {        
    if (results.length == 0) {
        res.locals.error = 'Username not find ! Please try again.' ;
        res.render('hotel/h_login', {title : "Welcome to together"});
        flag = 1;
        console.log('11');
        return;
    }

    else if (err) {
        res.locals.error = 'Something wrong ! Please try again.' ;
        res.render('hotel/h_login', {title : "Welcome to together"});
        flag = 1;
        console.log("222");
        return;
      }
  });


    api.hotel_login(hotelid,password,function(err, results){
        if(results.length == 0)
        {
            res.locals.error = 'Password is wrong ! Please try again.' ;
            res.render('hotel/h_login', {title : "Welcome to together"});
            return;
        console.log("22");
        }
        if(results[0].status == 0)
        {
            res.locals.error = 'Your register is being verified. Please wait for a second. Thank you !' ;
            res.render('hotel/h_login', {title : "Welcome to together"});
            return;
        }
        else {
            req.session.hotelid = hotelid;
            req.session.hotelname = results[0].hotel_name;
            req.session.usertype = "hotel";
            console.log(req.session);
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname + " !"});
        }
});
});

hotel_routes.get('/h_signup', function(req, res) {
    res.render('hotel/h_signup', {title : "Sign up for together"});
});

hotel_routes.post('/h_signup', function(req, res) {
  var hotelid = req.body['id'],
      password = req.body['password'],
      password_c = req.body['password_confirm'],
      tel = req.body['tel'], 
      email = req.body['email'],
      addr = req.body['addr'],
      city = req.body['city'],
      price = req.body['price'],
      status = 1,
      name = req.body['name'];
      img = req.body['image']; 
      console.log(req.body);

   if(password!=password_c)
    {
        //res.redirect('/user/u_signup', {title : "Sign up for together"});
        res.locals.error = 'Please keep the passwords the same ! ' ;
        //res.redirect('user/u_signup', {title : "Sign up for together"});
        res.render('hotel/h_signup', {title : "Sign up for together"});
        return;
    }

  //检查用户名是否已经存在
    api.hotel_find(hotelid, function (err, results) {        
             //console.log(results.length===0);
    if (results.length != 0) {
        res.locals.error = 'Hotel id already be used !' ;
        res.render('hotel/h_signup', {title : "Sign up for together"});
        //console.log('11');
        return;
    }

    else if (err) {
        res.locals.error = 'Hotel id already be used !' ;
        res.render('hotel/h_signup', {title : "Sign up for together"});
        //console.log("22");
        return;
      }

    api.hotel_signup(hotelid, password, tel, name, email, addr, city, status, price, img);
    res.locals.success = 'Signup successfully !  <a class="btn btn-link" href="/hotel/h_login" role="button"> Sign in </a>' ;
    res.render('hotel/h_signup', {title : "Sign up for together"});
    return; 
    });
});

hotel_routes.get('/h_backend', function(req, res) {
    if(req.session.usertype != "hotel")
    {
        res.redirect('/', {title : "Together"});
    }
    res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname + " !"});
});

module.exports = hotel_routes;
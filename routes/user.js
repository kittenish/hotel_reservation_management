var express = require('express');
var user_routes = express.Router();
//var auth = require('../midlewares/auth.js');
var api = require('../api');
var qs = require('querystring');
var url = require('url');

user_routes.get('/u_login', function(req, res, next){
    //console.log("lllll");
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
            //console.log(req.session);
            res.render('user/u_backend' , {title : "Hi "+ req.session.username + " !",username:req.session.username});
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
    //console.log("_______");
    if(req.session.usertype != "user")
    {
        res.redirect('/', {title : "Together"});
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "customer") {
        api.user_find(req.session.userid, function (err, results) {        

        if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
        }
        else {
            
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });

    }
    /*else if(qs.parse(url.parse(req.url).query).search_type == "customer_findhotel") {
        api.hotel_all_room_type(function (err, results) {        

        if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
        }
        else {
            
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });

    }*/

    else if(qs.parse(url.parse(req.url).query).search_type == "customer_search_hotel") {
        var search = qs.parse(url.parse(req.url).query);
        //console.log(search);
        api.user_search_hotel(search, function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "customer_search_room") {
        var search = qs.parse(url.parse(req.url).query);
        //console.log(search);
        api.hotel_room_type(search.hotel_id, function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "make_order") {
        var search = qs.parse(url.parse(req.url).query);
        //console.log(search);
        api.room_type_find (search.room_type, function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "unpayed_order") {
        //console.log("unpayed_order");
        
        api.reservation_find_by_userid (req.session.userid, 'Unpayed',function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "payed_order") {
        
        api.reservation_find_by_userid (req.session.userid, 'Payed',function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

     else if(qs.parse(url.parse(req.url).query).search_type == "apply_refund_order") {
        
        api.reservation_find_by_userid (req.session.userid, 'Applying Refund',function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

    

    else if(qs.parse(url.parse(req.url).query).search_type == "confirmed_order") {
        
        api.reservation_find_by_userid (req.session.userid, 'Confirmed',function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

     else if(qs.parse(url.parse(req.url).query).search_type == "completed_order") {
        
        api.reservation_find_by_userid (req.session.userid, 'Complete',function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "refund_reservation") {
        
        api.reservation_find_by_userid (req.session.userid, 'Refund',function (err, results) {
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var strJson = JSON.stringify(results);
                res.write(strJson);
                res.end();
            }
        }
            );
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "make_reser") {
        var search = qs.parse(url.parse(req.url).query);
        console.log(search);
        var arrival = search.arrival,
            leave = search.leave,
            roomtypeid = search.roomtypeid,
            num = search.num,
            other_mates = search.other_mates,
            userid = req.session.userid;
        api.check_date(arrival, leave, roomtypeid, function(err,results){
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
        }
            
            else {
                console.log(results);
                if(results >= search.num)
                {
                    api.add_reservation(arrival, leave, roomtypeid, userid, num, other_mates);
                    res.write("0");
                    res.end();
                }
                else 
                {
                    res.write(results.toString());
                    res.end();
                }
                return;
            }
        
        });
        //console.log("dsad");
        //console.log(value);
        
    }

     else if(qs.parse(url.parse(req.url).query).search_type == "pay_money") {
        console.log(qs.parse(url.parse(req.url).query).reser_id);
        api.pay_reservation(qs.parse(url.parse(req.url).query).reser_id);
        res.end();
    }

     else if(qs.parse(url.parse(req.url).query).search_type == "apply_refund") {
        console.log(qs.parse(url.parse(req.url).query).reser_id);
        api.apply_refund_reservation(qs.parse(url.parse(req.url).query).reser_id);
        res.end();
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "delete_reservation") {
        console.log(qs.parse(url.parse(req.url).query).reser_id);
        api.delete_reservation(qs.parse(url.parse(req.url).query).reser_id);
        res.end();
    }

    
    else if (qs.parse(url.parse(req.url).query).search_type == "home"){
        //res.locals.u_search = false;
        //console.log("ohem");
        res.render('user/u_backend' , 
        {title : "Welcome to Together", username: req.session.username});

    }
    //console.log(req.session);

});

user_routes.get('/u_edit_profile', function(req, res) {

if(req.session.usertype != "user")
    {
        res.redirect('/', {title : "Together"});
        res.end();
    }
else {
    var info = qs.parse(url.parse(req.url).query);
  var userid = req.session.userid,
      password = info.password,
      tel = info.tel, 
      email = info.email,
      name = info.name; 
      console.log(info);

      api.user_edit_profile(userid, password, tel, email, name);
      res.end();
}
    });

user_routes.post('/search', function(req, res){
    if(req.session.usertype != "user")
    {
        res.redirect('/', {title : "Together"});
    }
    res.render('user/u_search_hotel', {title : "Welcome to Together", username: req.session.username});
});

user_routes.get('/search', function(req, res){
    if(req.session.usertype != "user")
    {
        res.redirect('/', {title : "Together"});
    }
    res.render('user/u_backend', {title : "Welcome to Together", username: req.session.username});
});

module.exports = user_routes;
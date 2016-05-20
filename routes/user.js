var express = require('express');
var user_routes = express.Router();
var api = require('../api');
var qs = require('querystring');
var url = require('url');

user_routes.get('/u_login', function(req, res, next){
    
    if (req.session.err) {
        var msg = req.session.err;
        req.session.err = null;
        res.render('user/u_login', {
            message: msg
        });

    } else {
        res.render('user/u_login',{title : "Welcome to together"});
    }
});

user_routes.post('/u_login',function(req, res){
    var username = req.body['username'],
        password = req.body['password'];
    var flag = 0;
    api.user_find(username, function (err, results) {        
    if (results.length == 0) {
        res.locals.error = 'User id not find ! Please try again.' ;
        res.render('user/u_login', {title : "Welcome to together"});
        flag = 1;
        return;
    }

    else if (err) {
        res.locals.error = 'Something wrong ! Please try again.' ;
        res.render('user/u_login', {title : "Welcome to together"});
        flag = 1;
        return;
      }
    });

    if(flag == 1)
        {return;
            res.end();}

    api.user_login(username,password,function(err, results){
        if(results.length == 0)
        {
            res.locals.error = 'Password is wrong ! Please try again.' ;
            res.render('user/u_login', {title : "Welcome to together"});
            return;
        }
        else {
            req.session.userid = username;
            req.session.username = results[0].customer_name;
            req.session.usertype = "user";
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
        res.locals.error = 'Please keep the passwords the same ! ' ;
        res.render('user/u_signup', {title : "Sign up for together"});
        return;
    }

  //检查用户名是否已经存在
    api.user_find(username, function (err, results) {        
    if (results.length != 0) {
        res.locals.error = 'User id already be used !' ;
        res.render('user/u_signup', {title : "Sign up for together"});
        return;
    }

    else if (err) {
        res.locals.error = 'User id already be used !' ;
        res.render('user/u_signup', {title : "Sign up for together"});
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

    else if(qs.parse(url.parse(req.url).query).search_type == "customer_search_hotel") {
        var search = qs.parse(url.parse(req.url).query);
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
        });
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "customer_search_room") {
        var search = qs.parse(url.parse(req.url).query);
        api.hotel_room_type(search.hotel_id, search.arrival, function (err, results) {
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

    else if(qs.parse(url.parse(req.url).query).search_type == "make_order") {
        var search = qs.parse(url.parse(req.url).query);
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
        });
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "unpayed_order") {
        
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
        });
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
        });
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
        });
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
        });
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
        });
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
        });
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "make_reser") {
        var search = qs.parse(url.parse(req.url).query);
        console.log(search);
        var arrival = search.arrival,
            leave = search.leave,
            roomtypeid = search.roomtypeid,
            num = search.num,
            other_mates = search.other_mates,
            price = search.price,
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
                    api.add_reservation(arrival, leave, roomtypeid, userid, num, other_mates, price);
                    res.write("-1");
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
    }

    else if(qs.parse(url.parse(req.url).query).search_type == "pay_money") {
        console.log(qs.parse(url.parse(req.url).query).reser_id);
        api.reservation_find_by_reserid(qs.parse(url.parse(req.url).query).reser_id, function(err,results){
            if (err) {
            res.render('user/u_login', {title : "Welcome to together"});
            return;
            }
            else {
                var reser = JSON.stringify(results);
                    reser = JSON.parse(reser);
                    console.log(reser[0]);
                var s = reser[0];
                 api.check_date(s.reser_begin, s.reser_end, s.room_type_room_type_id, function(err,results){
                    if (err) {
                    res.render('user/u_login', {title : "Welcome to together"});
                    return;
                    }
                    else{
                        console.log(results);
                        if(results >= s.reser_num_room)
                        {
                            api.pay_reservation(qs.parse(url.parse(req.url).query).reser_id);
                            res.write("-1");
                            res.end();
                        }
                        else {
                            api.delete_reservation(qs.parse(url.parse(req.url).query).reser_id);
                            res.write(results.toString());
                            res.end();
                        }
                        return;
                    }
                 });
            }
        });
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

    else if(qs.parse(url.parse(req.url).query).search_type == "order_price") {
        var cal = qs.parse(url.parse(req.url).query);
        api.calculate_price(cal.arrival, cal.leave, cal.room_type, function(err, result){
            if (err) {
                res.render('user/u_login', {title : "Welcome to together"});
                return;
            }
            else {
                res.write(result.toString());
                res.end();
                return;
            }
        });
        
    }

    else if (qs.parse(url.parse(req.url).query).search_type == "home"){
    
        res.render('user/u_backend' , 
        {title : "Welcome to Together", username: req.session.username});

    }

});

user_routes.get('/u_edit_profile', function(req, res) {

    if(req.session.usertype != "user")
    {
        res.redirect('/', {title : "Together"});
        res.end();
        return;
    }
    else {
        var info = qs.parse(url.parse(req.url).query);
        var userid = req.session.userid,
            password = info.password,
            tel = info.tel, 
            email = info.email,
            name = info.name; 

        api.user_edit_profile(userid, password, tel, email, name);
        res.end();
        return;
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
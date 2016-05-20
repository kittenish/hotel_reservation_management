var express = require('express');
var admin_routes = express.Router();
var api = require('../api');
var qs = require('querystring');
var url = require('url');

admin_routes.get('/a_login', function(req, res, next){
    if (req.session.err) {
        var msg = req.session.err;
        req.session.err = null;
        res.render('admin/a_login', {
            message: msg
        });

    } else {
        res.render('admin/a_login',{title : "Welcome to together"});
    }
});

admin_routes.post('/a_login',function(req, res){
    var adminid = req.body['adminid'],
        password = req.body['password'];
        console.log(req.body);
  
    api.admin_login(adminid,password,function(err, results){
        if(results.length == 0)
        {
            res.locals.error = 'Please try again.' ;
            res.render('admin/a_login', {title : "Welcome to together"});
            return;
        }
        if(results[0].status == 0)
        {
            res.locals.error = 'Your register is being verified. Please wait for a second. Thank you !' ;
            res.render('admin/a_login', {title : "Welcome to together"});
            return;
        }
        else {
            req.session.adminid = adminid;
            req.session.adminname = results[0].admin_name;
            req.session.usertype = "admin";
            console.log(req.session);
            res.render('admin/a_backend' , {title : "Hi "+ req.session.adminname,username : req.session.adminname});
        }
    });
});

admin_routes.get('/a_backend', function(req, res){
    if(req.session.usertype != "admin")
    {
        res.redirect('/', {title : "Together"});
        res.end();
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "hotel_search")
    {
        api.hotel_all(function (err, results) {        

        if (err) {
            res.render('admin/a_login', {title : "Welcome to together"});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
            return;
        }
        });
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "hotel_enable")
    {
        api.hotel_find_by_status(0, function (err, results) {        

        if (err) {
            res.render('admin/a_login', {title : "Welcome to together"});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
            return;
        }
        });
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "hotel_disable")
    {
        api.hotel_find_by_status(1, function (err, results) {        

        if (err) {
            res.render('admin/a_login', {title : "Welcome to together"});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
            return;
        }
        
    });
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "order_search")
    {
        var search = qs.parse(url.parse(req.url).query);
        
        api.reservation_search_by_reserid_userid(search.reser_id, search.customer_id, function (err, results) {        

        if (err) {
            res.render('admin/a_login', {title : "Welcome to together"});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
            return;
        }
        });
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "order_all")
    {
        api.reservation_find_all(function (err, results) {        

        if (err) {
            res.render('admin/a_login', {title : "Welcome to together"});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
            return;
        }
        });
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "a_hotel_disable")
    {
        api.hotel_set_status(0, qs.parse(url.parse(req.url).query).hotel_id);
        res.end();
        return;
    }
    else if(qs.parse(url.parse(req.url).query).search_type == "a_hotel_enable")
    {
        api.hotel_set_status(1, qs.parse(url.parse(req.url).query).hotel_id);
        res.end();
        return;
    }
    console.log("should not reach here");
});


module.exports = admin_routes;

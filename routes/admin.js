var express = require('express');
var admin_routes = express.Router();
var api = require('../api');
var qs = require('querystring');
var url = require('url');

admin_routes.get('/a_login', function(req, res, next){
    //console.log("lllll");
    if (req.session.err) {
        var msg = req.session.err;
      console.log(req.session);
        req.session.err = null;
        res.render('admin/a_login', {
            message: msg
        });

    } else {
        res.render('admin/a_login',{title : "Welcome to together"});
    }
}
    );

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
        //console.log("22");
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


module.exports = admin_routes;

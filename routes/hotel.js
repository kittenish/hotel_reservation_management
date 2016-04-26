var express = require('express');
var hotel_routes = express.Router();
var api = require('../api');
var qs = require('querystring');
var formidable = require('formidable');
var url = require('url');
var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: 'public/upload/' });

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
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname,username : req.session.hotelname});
        }
});
});

hotel_routes.get('/h_signup',  function(req, res) {
    res.render('hotel/h_signup', {title : "Sign up for together"});
});

hotel_routes.post('/h_signup', upload.single('image'),function(req, res) {
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
      //img = req.body['image']; 
      console.log(req.body);
      console.log(req.file);

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
      

    api.hotel_signup(hotelid, password, tel, name, email, addr, city, status, price, req.file.filename);
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
    
    else if(qs.parse(url.parse(req.url).query).search_type == "hotel") {
        api.hotel_find(req.session.hotelid, function (err, results) {        

        if (err) {
            res.render('hotel/h_login', {title : "Welcome to together"});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });}
   
    else if(qs.parse(url.parse(req.url).query).search_type == "hotel_room_type") {
        api.hotel_room_type(req.session.hotelid, function (err, results) {        

        if (err) {
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });}
    

    else if(qs.parse(url.parse(req.url).query).search_type == "processed_confirm_reservation") {
        
        api.reservation_find_by_hotelid(req.session.hotelid, "Payed", function (err, results) {        

        if (err) {
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });}
        

        else if(qs.parse(url.parse(req.url).query).search_type == "processed_refund_reservation") {
        
        api.reservation_find_by_hotelid(req.session.hotelid, "Applying Refund", function (err, results) {        

        if (err) {
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });
        
        
    }

     else if(qs.parse(url.parse(req.url).query).search_type == "confirmed_reservation") {
        
        api.reservation_find_by_hotelid(req.session.hotelid, "Confirmed", function (err, results) {        

        if (err) {
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });}

    else if(qs.parse(url.parse(req.url).query).search_type == "refunded_reservation") {
        
        api.reservation_find_by_hotelid(req.session.hotelid, "Refund", function (err, results) {        

        if (err) {
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });}
        

    else if(qs.parse(url.parse(req.url).query).search_type == "all_reservation") {
        
        api.reservation_find_by_hotelid(req.session.hotelid, "all", function (err, results) {        

        if (err) {
            res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
            return;
        }
        else {
            var strJson = JSON.stringify(results);
            res.write(strJson);
            res.end();
        }
  });}

    else if(qs.parse(url.parse(req.url).query).search_type == "confirm_reser") {
        //console.log("----------");

        reserid = qs.parse(url.parse(req.url).query).reser_id;
        
        api.confirm_reservation(reserid);      

  }

  else if(qs.parse(url.parse(req.url).query).search_type == "refund_reser") {
        //console.log("----------");

        reserid = qs.parse(url.parse(req.url).query).reser_id;
        
        api.refund_reservation(reserid);      

  }
    


    else 
        res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
});



hotel_routes.get('/add_room', function(req,res){
    if(req.session.usertype != "hotel")
    {
        res.redirect('/', {title : "Together"});
    }
    else
        res.render('hotel/add_room',{title: "Hi "+ req.session.hotelname, username : req.session.hotelname});
}
    );


hotel_routes.post('/add_room', upload.single('room_image'),function(req, res){
    var room_type_id = req.body.room_type_id;
    var price = req.body.room_price;
    var num = req.body.room_num;
    var info = req.body.room_info;
    var area = req.body.room_area;
    var bed = req.body.room_bed;
    var type = req.body.room_type;
    var standard = req.body.room_standard;
    var wifi = req.body.room_wifi;
    var cigarette = req.body.room_cigarette;

    api.room_type_find(room_type_id, function (err, results) {        
             //console.log(results.length===0);
    if (results.length != 0) {
        res.locals.error = 'Room Type Id already be used !' ;
         res.render('hotel/add_room',{title: "Hi "+ req.session.hotelname, username : req.session.hotelname});
        //console.log('11');
        return;
    }

    else if (err) {
        res.locals.error = 'Room Type Id already be used !' ;
         res.render('hotel/add_room',{title: "Hi "+ req.session.hotelname, username : req.session.hotelname});
        //console.log("22");
        return;
      }
      

    api.add_room(room_type_id, price, num, info, area, bed, type, standard, wifi, cigarette, req.session.hotelid, req.file.filename);
    res.locals.success = 'Add Room Successfully ! ' ;
     res.render('hotel/add_room',{title: "Hi "+ req.session.hotelname, username : req.session.hotelname});
    return; 
    });

    console.log(req.body);
    console.log(req.file);
});


hotel_routes.get('/h_room', function(req,res){
    if(req.session.usertype != "hotel")
    {
        res.redirect('/', {title : "Together"});
    }
    
    else 
    res.render('hotel/h_backend' , {title : "Hi "+ req.session.hotelname , username : req.session.hotelname});
}
    );



module.exports = hotel_routes;
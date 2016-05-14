var express = require('express');
var router = express.Router();
var api = require('../api');
var qs = require('querystring');
var url = require('url');
 
/* GET home page. */
router.get('/', function(req, res) {
	if(req.session.usertype == "user" ||req.session.usertype == "hotel" ){
		req.session.userid = null;
    	req.session.error = null;
        req.session.username = null;
        console.log("logout successfully.");
	}
    console.log(req.session);
  res.render('index',{title : "Together"});
});

router.get('/search',function(req, res){
	//console.log("aaaa");
	if(qs.parse(url.parse(req.url).query).search_type == "search_hotel") 
	{
		var search = qs.parse(url.parse(req.url).query);
		//console.log("xxx");
		api.user_search_hotel(search, function (err, results) {
            if (err) {
            res.render('search', {title : "Together"});
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

    else if(qs.parse(url.parse(req.url).query).search_type == "search_room") 
    {
        var search = qs.parse(url.parse(req.url).query);
        //console.log("xxx");
        api.hotel_room_type(search.hotel_id, function (err, results) {
            if (err) {
            res.render('search', {title : "Together"});
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

    else
		res.render('search',{title : "Together"});
});

 
module.exports = router;
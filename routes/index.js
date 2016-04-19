var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res) {
	if(req.session.usertype == "user"){
		req.session.userid = null;
    	req.session.error = null;
        req.session.username = null;
	}
    console.log(req.session);
  res.render('index',{title : "Together"});
});
 

 
module.exports = router;
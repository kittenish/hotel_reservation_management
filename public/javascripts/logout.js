$(document).ready(function(){
	$("#logout").click(function(req,res){
		res.redirect("/",{title:"logout"});
	});
});
$(document).ready(function(){
$("#logout").click(function(req,res){
	res.rendirect("/",{title:"logout"});
}
	);
});
$(document).ready (function(){

	$('button.col-offset-8.btn.btn-success.reser_confirm').click(function(obj){
    
    console.log(obj.currentTarget.value);
		var value = obj.currentTarget.value;
		var s = {
  			search_type : "confirm_reser",
  			reser_id : value
  		};
  	$.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success:function(){
				;
			}
     
    });
  
    $("#h_myorder").click();
    console.log("confirm finish");
  
  });

});
	
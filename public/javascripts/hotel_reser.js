$(document).ready (function(){

	$('button.col-offset-8.btn.btn-success.reser_confirm').click(function(obj){
    
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
  
    $("#h_process_confirm").click();
    console.log("confirm finish");
  
  });

	$('button.col-offset-8.btn.reject.byconfirm').click(function(obj){
    
		var value = obj.currentTarget.value;
		var s = {
  			search_type : "refund_reser",
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
  
    $("#h_process_confirm").click();
    console.log("refund finish");
  
  });

	$('button.col-offset-8.btn.reject.bycheck-in').click(function(obj){
   
		var value = obj.currentTarget.value;
		var s = {
  			search_type : "refund_reser",
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
  
    $("#h_process_check-in").click();
    console.log("not check-in finish");
  
  });

	$('button.col-offset-8.btn.btn-success.byrefund').click(function(obj){
    
		var value = obj.currentTarget.value;
		var s = {
  			search_type : "refund_reser",
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
  
    $("#h_process_refund").click();
    console.log("refund finish");
  
  });
	
	$('button.col-offset-8.btn.reject.byreject').click(function(obj){
    
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
  
    $("#h_process_refund").click();
    console.log("reject finish");
  
  });

	
	$('button.col-offset-8.btn.btn-success.reser_check-in').click(function(obj){
    
		var value = obj.currentTarget.value;
		var s = {
  			search_type : "check-in_reser",
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
  
    $("#h_process_check-in").click();
    console.log("check-in finish");
  
  });

	$('button.col-offset-8.btn.btn-success.bycheck-out').click(function(obj){
    
		var value = obj.currentTarget.value;
		var s = {
  			search_type : "check-out_reser",
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
  
    $("h_process_check-in").click();
    console.log("check-in finish");
  
  });

});
	
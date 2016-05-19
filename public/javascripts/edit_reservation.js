$(document).ready(function(){

	window.scroll(0,0);
	//console.log("finifh");

	$('button.col-offset-8.reser_type_b_.btn.btn-success.pay').click(function(obj){
		//console.log("pay");
		//console.log(obj.currentTarget.value);
		var r=confirm("Are you sure to pay for the reservation ?");
		if(r == true){
		var id = obj.currentTarget.value;

		var s = {
  			search_type : "pay_money",
  			reser_id : id
  		};
		$.ajax({
			type : "get",
			url : "u_backend",
			dataType : "text",
			data : s,
			success:function(msg){
			if(msg != "-1")
    		{
      			alert("Sorry only "+msg+" rooms left! You can't pay the order !");
    		}
    		else {
    			alert("Your reservation is payed successfully !");
    		}
    		$("#myunpayed").click();
			}
		});
		console.log("pay finish");
		
	});

	$('button.col-offset-8.reser_type_b.btn.btn-success.edit').click(function(obj){
		//console.log("edit");
		console.log(obj.currentTarget.value);

	});

	$('button.col-offset-8.reser_type_b.btn.btn-success.delete').click(function(obj){
		//console.log("delete");
		//console.log(obj.currentTarget.value);
		var r=confirm("Are you sure to delete the reservation ?");
		if(r == true){
		var id = obj.currentTarget.value;

		var s = {
  			search_type : "delete_reservation",
  			reser_id : id
  		};
		$.ajax({
			type : "get",
			url : "u_backend",
			dataType : "text",
			data : s,
			success:function(){
				;
			}
		});
		alert("Your reservation is payed successfully !");
		$("#myunpayed").click();
		console.log("delete finish");
	}
	});

	$('button.col-offset-8.btn.apply_refund').click(function(obj){
		 var r=confirm("Are you sure to apply refund ?");
    	if (r==false)
    	{
      		;
    	}
    	else
    	{
		console.log(obj.currentTarget.value);
		var id = obj.currentTarget.value;

		var s = {
			search_type : "apply_refund",
			reser_id : id
		};
		$.ajax({
			type : "get",
			url : "u_backend",
			dataType : "text",
			data : s,
			success:function(){
				;
			}
		});
		alert("Your refund is processing by the hotel !");
		$("#mypayed").click();
		console.log("refund finish");
	}
	});

});
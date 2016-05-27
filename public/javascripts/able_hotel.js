$(document).ready(function(){

	$("button.col-offset-8.hotel_b.btn.btn-success.disable").click(function(obj){
		
		var id = obj.currentTarget.id;
		var s = {
			search_type : "a_hotel_disable",
			hotel_id : id
		};
		console.log(s);
		$.ajax({
			type : "get",
        	url : "a_backend",
        	dataType : "text",
        	data : s,
        	success:function(msg){
        		;
        	}
		});
		setTimeout(function(){
			$("#hotel_disable").click();
		});

	});

	$("button.col-offset-8.hotel_b.btn.btn-success.enable").click(function(obj){
		var id = obj.currentTarget.id;
		var s = {
			search_type : "a_hotel_enable",
			hotel_id : id
		};
		console.log(s);
		$.ajax({
			type : "get",
        	url : "a_backend",
        	dataType : "text",
        	data : s,
        	success:function(msg){
        		;
        	}
		});
		setTimeout(function(){
			$("#hotel_enable").click();
		});

	});

});
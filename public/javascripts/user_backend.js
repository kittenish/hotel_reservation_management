$(document).ready(function(){
	//$("#myhome").css("background-color","#D6D6FF");
  	var inhome = $("#page-inner").html();
  	$("#myprofile").click(function(){
  	//alert("sdq");
  		//$("#myprofile").css("background-color","#D6D6FF");
  		//$("#myhome").css("background-color","#ffffff");
  		var s = {
  			search_type : "customer"
  		};
  		$.ajax({
  			type : "get",
  			url : "u_backend",
  			dataType : "text",
  			data : s,
  			success: function(msg){  
                msg = JSON.parse(msg);
                console.log(msg);
                	
                    $("#page-inner").html('');
                    
                    $("#page-inner").append("<h3 class = 'u_profile_h'>Detail Information </h3>");
                    $("#page-inner").append("<p class = 'u_profile'>My_id :    "+msg[0].customer_id+
                    	"</p><p class = 'u_profile'>My_name : "+msg[0].customer_name+
                    	"</p><p class = 'u_profile'>My_tel : "+msg[0].customer_tel+
                    	"</p><p class = 'u_profile'>My_emai : "+msg[0].customer_email+"</p>");
                	$(".u_profile").css("font-size","large");
                	$(".u_profile").css("margin","10px");
                	$('.u_profile').css("margin-left","200px");
                	$('.u_profile_h').css("margin-left","20px");
                	$('.u_profile_h').css("padding","30px");
            }
  		});
  	});

	$("#myhome").click(function(){
		var s = {
  			search_type : "home"
  		};
		$.ajax({
			type : "get",
			url : "u_backend",
			dataType : "text",
			data : s,
			success:function(){
				$("#page-inner").html(inhome);
			}
		});
	});
});
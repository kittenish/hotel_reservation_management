$(document).ready(function(){
	//$("#myhome").css("background-color","#D6D6FF");
  	$("#myprofile").click(function(){
  	//alert("sdq");
  		//$("#myprofile").css("background-color","#D6D6FF");
  		//$("#myhome").css("background-color","#ffffff");
  		var s = {
  			search_type : "hotel"
  		};
  		$.ajax({
  			type : "get",
  			url : "h_backend",
  			dataType : "text",
  			data : s,
  			success: function(msg){  
                msg = JSON.parse(msg);
                console.log(msg);
                	
                    $("#page-inner").html('');
                    
                    $("#page-inner").append("<h3 class = 'h_profile_h'>Detail Information </h3>");
                    $("#page-inner").append("<p class = 'h_profile'>Hotel id :    "+msg[0].hotel_id+"</p><p class = 'h_profile'>Hotel name : "+msg[0].customer_name+"</p><p class = 'h_profile'>Hotel City : "+msg[0].hotel_city+"</p><p class = 'h_profile'>Hotel Addr : "+msg[0].hotel_addr+"</p><p class = 'h_profile'>Hotel price : "+msg[0].hotel_price+"</p><p class = 'h_profile'>Hotel Tel : "+msg[0].hotel_tel+"</p><p class = 'h_profile'>Hotel Email : "+msg[0].hotel_email+"</p><p class = 'h_profile'>Hotel Photo : </p><img class = 'h_profile' src = "+"'../upload/" + msg[0].hotel_img + "'>");
                	$(".h_profile").css("font-size","large");
                	$(".h_profile").css("margin","10px");
                	$('.h_profile').css("margin-left","200px");
                	$('.h_profile_h').css("margin-left","20px");
                	$('.h_profile_h').css("padding","30px");
            }
  		});
  	});

	
	});
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
                    $("#page-inner").append("<p class = 'h_profile'>Hotel id :    "+msg[0].hotel_id+
                      "</p><p class = 'h_profile'>Hotel name : "+msg[0].hotel_name+
                      "</p><p class = 'h_profile'>Hotel City : "+msg[0].hotel_city+
                      "</p><p class = 'h_profile'>Hotel Addr : "+msg[0].hotel_addr+
                      "</p><p class = 'h_profile'>Hotel price : "+msg[0].hotel_price+
                      "</p><p class = 'h_profile'>Hotel Tel : "+msg[0].hotel_tel+
                      "</p><p class = 'h_profile'>Hotel Email : "+msg[0].hotel_email+
                      "</p><p class = 'h_profile'>Hotel Photo : </p>"+
                      "<img class = 'h_profile  h_profile_img' src = "+"'../upload/" + msg[0].hotel_img + "'>");
                	$(".h_profile").css("font-size","large");
                	$(".h_profile").css("margin","10px");
                	$('.h_profile').css("margin-left","200px");
                	$('.h_profile_h').css("margin-left","20px");
                	$('.h_profile_h').css("padding","30px");
                  $('.h_profile_img').css("width","500px");
                  $('#page-inner').css("height","1000px");
            }
  		});
  	});

    $("#hotel_room").click(function(){
    //alert("sdq");
      //$("#myprofile").css("background-color","#D6D6FF");
      //$("#myhome").css("background-color","#ffffff");
      var s = {
        search_type : "hotel_room_type"
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
                    //$("#page-inner").append("<h3 class = 'r_type_r col-sm-12' >Room Information </h3>");
                    var i = 0;
                while(i < msg.length){
                    //console.log("------------");
                    //console.log(msg.length);
                    $("#page-inner").append("<div class = 'col-sm-6 room_info'>"+
                      "<div class = 'r_type_r title'>"+msg[i].room_type_name +"</div>"+
                      "<div class = 'r_type '>Room Type Id :    "+msg[i].room_type_id+
                      "</div><div class = 'r_type '>Room Type : "+msg[i].room_type_name+
                      "</div><div class = 'r_type '>Room Standard : "+msg[i].room_standard+
                      "</div><div class = 'r_type '>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type '>Total Room Number : "+msg[i].room_num+
                      "</div><div class = 'r_type '>Room Area : "+msg[i].room_area+
                      "</div><div class = 'r_type '>Room Bed : "+msg[i].room_bed+
                      "</div><div class = 'r_type '>Room Wifi : "+msg[i].room_wifi+
                      "</div><div class = 'r_type '>Room Cigarette : "+msg[i].room_cigarette+
                      "</div><div class = 'r_type '>Room Photo : </div>"+
                      "<div><img class = 'r_type  r_type_img ' src = "+"'../upload/" + msg[i].room_img + 
                      "'></div></div>");

                  $(".r_type").css("margin","10px");
                  $('.r_type').css("margin-left","80px");
                  $('.r_type_r').css("margin-left","20px");
                  $('.r_type_r').css("padding","30px");
                  $('.title').css("font-size","25px");
                  $('.r_type_img').css("width","350px");
                  $('#page-inner').css("height","1600px");
                  //$('.room_info').css("display", "inline-block");
                  i += 1;
                }
            }
      });
    });

	
	});
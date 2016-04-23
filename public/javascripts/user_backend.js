$(document).ready(function(){
	//$("#myhome").css("background-color","#D6D6FF");
  	var inhome = $("#page-inner").html();
  	var search_item = $('#search_item').html();
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

	


	$("#mybooking").click(function(){
		var s = {
  			search_type : "customer_findhotel"
  		};
		$.ajax({
			type : "get",
			url : "u_backend",
			dataType : "text",
			data : s,
			success:function(msg){
				msg = JSON.parse(msg);
				$("#page-inner").html(search_item);
				var i = 0;
				//console.log(msg[0].room_img);
				//$("#page-inner").append(" <% include u_search.html %>");
				while(i< msg.length){
					if(i % 2 == 0){
					$("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
                   	  
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      "</div><div class = 'r_type col-sm-4'>Room Standard : "+msg[i].room_standard+
                      "</div><div class = 'r_type col-sm-4'>Room Price : "+msg[i].room_price+
                      
                      "</div><div class = 'r_type col-sm-4'>Room Area : "+msg[i].room_area+
                      "</div><div class = 'r_type col-sm-4'>Room Bed : "+msg[i].room_bed+
                      "</div><div class = 'r_type col-sm-4'>Room Wifi : "+msg[i].room_wifi+
                      "</div><div class = 'r_type col-sm-4'>Room Cigarette : "+msg[i].room_cigarette+
                      "</div>"+
                      "<button class = 'col-offset-8 room_type_b btn btn-success' >BOOK NOW</button>"+
                      "</div>");
				}
					else {
						$("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                   	  
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      "</div><div class = 'r_type col-sm-4'>Room Standard : "+msg[i].room_standard+
                      "</div><div class = 'r_type col-sm-4'>Room Price : "+msg[i].room_price+
                      
                      "</div><div class = 'r_type col-sm-4'>Room Area : "+msg[i].room_area+
                      "</div><div class = 'r_type col-sm-4'>Room Bed : "+msg[i].room_bed+
                      "</div><div class = 'r_type col-sm-4'>Room Wifi : "+msg[i].room_wifi+
                      "</div><div class = 'r_type col-sm-4'>Room Cigarette : "+msg[i].room_cigarette+
                      "</div>"+
                      "<button class = 'col-offset-8 room_type_b btn btn-success' >BOOK NOW</button>"+
                      "</div>");
					}

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.room_info').css("padding","10px");
                  $('.room_type_b').css("margin-left","250px");
                  $('.room_type_b').css("margin-top","20px");
                  $('.room_type_b').css("background-color", "#087CF3");
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");
                  
                  //$('#page-inner').css("height","1600px");
					i += 1;
				}
			}
		});
	});


  $("#myunpayed").click(function(){
    var s = {
        search_type : "unpayed_order"
      };
    $.ajax({
      type : "get",
      url : "u_backend",
      dataType : "text",
      data : s,
      success:function(msg){
        //$("#page-inner").html(inhome);
        //console.log(msg[0]);
        msg = JSON.parse(msg);
        $("#page-inner").html('');
        var i = 0;
        //$("#page-inner").append("<script src = '/javascripts/edit_reservation.js'></script>");

        while(i< msg.length){

         if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8 reser_type_b_ btn btn-success pay' value = '"+msg[i].reser_id+"'>PAY</button>"+
                      "<button class = 'col-offset-8 reser_type_b btn btn-success edit' value = '"+msg[i].reser_id+"'>EDIT</button>"+
                      "<button class = 'col-offset-8 reser_type_b btn btn-success delete' value = '"+msg[i].reser_id+"'>DELETE</button>"+
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "<><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "<//divdiv><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8 reser_type_b_ btn btn-success pay' value = '"+msg[i].reser_id+"'>&nbsp;&nbsp;&nbsp;&nbsp;PAY&nbsp;&nbsp;&nbsp;&nbsp;</button>"+
                      "<button class = 'col-offset-8 reser_type_b btn btn-success edit' value = '"+msg[i].reser_id+"'>&nbsp;&nbsp;&nbsp;EDIT&nbsp;&nbsp;&nbsp;</button>"+
                      "<button class = 'col-offset-8 reser_type_b btn btn-success delete' value = '"+msg[i].reser_id+"'>DELETE</button>"+
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.room_info').css("padding","10px");
                  $('.reser_type_b_').css("margin-left","500px");
                  $('.reser_type_b').css("margin-left","20px");
                  $('.reser_type_b').css("margin-top","20px");
                  $('.reser_type_b_ ').css("margin-top","20px");
                  $('.reser_type_b').css("background-color", "#087CF3");
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  
                  //$('#page-inner').css("height","1600px");
                  i += 1;
        }
        $("#page-inner").append("<script src = '/javascripts/edit_reservation.js'></script>");

      }
    });
  });
	
  $("#mypayed").click(function(){
    var s = {
        search_type : "payed_order"
      };
    $.ajax({
      type : "get",
      url : "u_backend",
      dataType : "text",
      data : s,
      success:function(msg){
        //$("#page-inner").html(inhome);
        //console.log(msg[0]);
        msg = JSON.parse(msg);
        $("#page-inner").html('');
        var i = 0;
        //$("#page-inner").append("<script src = '/javascripts/edit_reservation.js'></script>");

        while(i< msg.length){

         if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "<><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "<//divdiv><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.room_info').css("padding","10px");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.apply_refund').css("margin-left","500px");
              
                  $('.apply_refund').css("margin-top","20px");
                  $('.apply_refund').css("background-color", "#087CF3");
                  $('.apply_refund').css("color", "#ffffff");
                  //$('#page-inner').css("height","1600px");
                  i += 1;
        }
        //$("#page-inner").append("<script src = '/javascripts/edit_reservation.js'></script>");

      }
    });
  });
  

});
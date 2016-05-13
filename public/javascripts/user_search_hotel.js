$(document).ready(function(){

  var msg=[];
  var totalPages;
  var self=this;
  var search_item_in = "<div id = 'search_item'>"+$('#search_item').html()+"</div>";

  window.selectPage=function(page){
      currentPage=page;
      console.log(page);
      renderPages(page,6);
  }

  window.scroll(0,0);

  function renderPages(start,count){
  
    $("#page-inner").html(search_item_in);
    $("#page-inner").append(" <script src = '/javascripts/user_book.js'></script>");
    search_information(start,self.msg,count);
  }

  

	$("#user__search_hotel").click(function(){

  		var s_city = $("#s_city").val(),
  			s_name = $("#s_hotel_name").val(),
  			s_arrival = $("#s_check_in").val(),
  			s_leave = $("#s_check_out").val(),
  			s_price_min = $("#s_room_price_min").val(),
  			s_price_max = $("#s_room_price_max").val(),
  			s_wifi = $("#s_wifi").val(),
  			
  			s_ci = $("#s_cigarette").val();
  			

  		var s = {
  			search_type : "customer_search_hotel",
  			city : s_city,
  			hotelname : s_name,
  			arrival: s_arrival,
  			leave : s_leave,
  			price_min : s_price_min,
  			price_max : s_price_max,
  			wifi : s_wifi,
  			ci : s_ci,
  			
  		};
  		console.log(s);
		$.ajax({
			type : "get",
			url : "u_backend",
			dataType : "text",
			data : s,
			success:function(msg){
				msg = JSON.parse(msg);
        self.msg = msg;
        self.totalPages = msg.length/6;
				$("#page-inner").html(search_item);
				//var i = 0;
				//console.log(msg);
				$("#page-inner").append(" <script src = '/javascripts/user_book.js'></script>");
        //var totalPages= msg.length / 6;
        search_information(0,self.msg,6);

				
			}
		});
	});
  
  function search_information(page, msg, count){
  var i = 0;
  for(i = page * count ; i < count + page * count && i < msg.length; i++){
          if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      "</div><div class = 'r_type col-sm-6'>Room Standard : "+msg[i].room_standard+
                     
                      
                      "</div><div class = 'r_type col-sm-3 '>Room Area : "+msg[i].room_area+
                      "</div><div class = 'r_type col-sm-6'>Room Bed : "+msg[i].room_bed+
                      "</div><div class = 'r_type col-sm-3 '>Room Wifi : "+msg[i].room_wifi+
                      "</div><div class = 'r_type col-sm-6'>Room Cigarette : "+msg[i].room_cigarette+
                      "</div><div class = 'r_type col-sm-3' style = ' font-size: 30px;"+
                        "margin-top: 20px;margin-left: 275px;color: #FE3E07;font-weight: 900;'>"+msg[i].room_price+"/day"+
                      
                      "</div>"+
                      
                      "<button class = 'col-offset-8 room_type_b btn btn-success' id = '"+msg[i].room_type_id+"'>BOOK NOW</button>"+
                      "</div>");
        }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      "</div><div class = 'r_type col-sm-6'>Room Standard : "+msg[i].room_standard+
                      
                      
                      "</div><div class = 'r_type col-sm-3'>Room Area : "+msg[i].room_area+
                      "</div><div class = 'r_type col-sm-6'>Room Bed : "+msg[i].room_bed+
                      "</div><div class = 'r_type col-sm-3'>Room Wifi : "+msg[i].room_wifi+
                      "</div><div class = 'r_type col-sm-6'>Room Cigarette : "+msg[i].room_cigarette+
                      "</div><div class = 'r_type col-sm-3' style = ' font-size: 30px;"+
                        "margin-top: 20px;margin-left: 275px;color: #FE3E07;font-weight: 900;'>"+msg[i].room_price+"/day"+
                      "</div>"+
                      "<button class = 'col-offset-8 room_type_b btn btn-success' id = '"+msg[i].room_type_id+"'>BOOK NOW</button>"+
                      "</div>");
          }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.room_info').css("padding","10px");
                  //$('.room_type_b').css("margin-left","300px");
                  $('.room_type_b').css("margin-top","20px");
                  $('.room_type_b').css("background-color", "#087CF3");
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");
                  
                  //$('#page-inner').css("height","1600px");
          //i += 1;
        }
        $("#page-inner").append(" <script src = '/javascripts/user_book.js'></script>");
        builder="";
        var page = 0;
        //$("#page-inner").append("<div style = 'margin-left: 300px;'>");
        for(page=0;page<self.totalPages;page++){
          pages = page + 1;
          builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
          "margin-top: 20px;' onclick='selectPage("+page+")'>"+pages+"</button>";
        }
        $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");
        //$("#page-inner").append("</div>");
      }


});
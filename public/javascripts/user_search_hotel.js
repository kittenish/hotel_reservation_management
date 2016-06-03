$(document).ready(function(){

  function getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
      var r = window.location.search.substr(1).match(reg);  
      if (r != null)  
          return unescape(r[2]); 
      return null; 
  }
     
  var msg=[];
  var totalPages;
  var self=this;
  var search_item_in = "<div id = 'search_item_in'>"+$('#search_item_in').html()+"</div>";

  window.selectPage=function(page){
      currentPage=page;
      //console.log(page);
      self.page = page;
      renderPages(page,6);
  }

  window.scroll(0,0);

  function renderPages(start,count){
  
    $("#page-inner").html(search_item_in);
    u_search_hotel(start,self.msg,count);
  }

  $("#user__search_hotel").click(function(){

  		var s_city = $("#s_city").val(),
  		s_name = $("#s_hotel_name").val(),
  		s_arrival = $("#s_check_in").val(),
			s_leave = $("#s_check_out").val(),
  		s_price_min = $("#s_room_price_min").val(),
  		s_price_max = $("#s_room_price_max").val();
  		
  			
      var s = {
  			search_type : "customer_search_hotel",
  			city : s_city,
  			hotelname : s_name,
  			arrival: s_arrival,
  			leave : s_leave,
  			price_min : s_price_min,
  			price_max : s_price_max
  			
  		};
  		
		  $.ajax({
		    type : "get",
		    url : "u_backend",
			  dataType : "text",
			  data : s,
			  success:function(msg){
				    
            msg = JSON.parse(msg);
            self.msg = msg;
            self.totalPages = msg.length/6;
				    $("#page-inner").html(search_item_in);
            u_search_hotel(0,self.msg,6);
            self.page = 0;
            $("#page-inner-in").css("height","1240px");

            $("#s_hotel_name").attr("value", s_name);
            $("#s_check_in").attr("value", s_arrival);
            $("#s_check_out").attr("value", s_leave);
            $("#s_city").val(s_city);
            $("#s_room_price_min").attr("value", s_price_min);
            $("#s_room_price_max").attr("value", s_price_max);

			  }
	   });
  });
  
  function u_search_hotel(page, msg, count){

      $("#page-inner").append("<p id = 'total' style = 'margin-top:15px;'"+
        ">"+"Total hotel: "+self.msg.length+"</p>");

      var i = 0;
      for(i = page * count ; i < count + page * count && i < msg.length; i++){
        
        if(i % 2 == 0){
          
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
            "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
            + msg[i].hotel_img + "'></div>"+
            "<div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
            "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
           
            "</div><div class = 'r_type col-sm-3'>Hotel City :    "+msg[i].hotel_city+
            "</div><div class = 'r_type col-sm-6'>Hotel Tel : "+msg[i].hotel_tel+
            "</div><div class = 'r_type col-sm-2' style = 'font-size: 30px;    color: #F9480B; margin-left: 350px;'"+
            ">"+msg[i].hotel_price+"/day"+
            "</div>"+
            "<button class = 'col-offset-8 hotel_b btn btn-success' id = '"+msg[i].hotel_id+"'>MORE INFO</button>"+
            "</div>");
        }
      
        else {
          
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
            "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
            + msg[i].hotel_img + "'></div>"+
            "<div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
            "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
            
            "</div><div class = 'r_type col-sm-3'>Hotel City :    "+msg[i].hotel_city+
            "</div><div class = 'r_type col-sm-6'>Hotel Tel : "+msg[i].hotel_tel+
            "</div><div class = 'r_type col-sm-2' style = 'font-size: 30px;    color: #F9480B; margin-left: 350px;'"+
            ">"+msg[i].hotel_price+"/day"+
            "</div>"+
            "<button class = 'col-offset-8 hotel_b btn btn-success' id = '"+msg[i].hotel_id+"'>MORE INFO</button>"+
            "</div>");
          }
      }

      $('.room_info').css("padding","10px");
      $('.room_info').css("font-size","15px");
      $('.room_info').css("line-height","2.5");
      $('.hotel_b').css("margin-top","20px");
      $('.hotel_b').css("background-color", "#087CF3");
      $('.hotel_b').css("margin-left","70px");
      $('.hotel_b').css("font-size","16px");
      $('.color_white').css("background-color", "#F3F3F3");
      $('.color_grey').css("background-color", "#ffffff");
   
    
      
      builder="";
      var page = 0;
      for(page=0;page<self.totalPages;page++){
          pages = page + 1;
          builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
          "margin-top: 20px;' onclick='selectPage("+page+")'>"+pages+"</button>";
      }
      $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");
      $("#page-inner").append("<script src = '/javascripts/user_search_room.js'></script>");
  }

});
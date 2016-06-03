$(document).ready(function(){

	var msg=[];
  var totalPages;
	var self=this;

  window.scroll(0,0);

  var self = this;

  window.search_selectPage=function(page){
    currentPage=page;
    //console.log(page);
    search_renderPages(page,7);
  }

  function search_renderPages(start,count){
    $("#page-inner").html("");
    window.scroll(0,0);
    a_search_hotel(start,self.msg,count);
  }

  window.enable_selectPage=function(page){
      currentPage=page;
      //console.log(page);
      enable_renderPages(page,7);
  }

  function enable_renderPages(start,count){
    $("#page-inner").html("");
    window.scroll(0,0);
    a_enable_hotel(start,self.msg,count);
  }

  window.disable_selectPage=function(page){
    currentPage=page;
    //console.log(page);
    disable_renderPages(page,7);
  }

  function disable_renderPages(start,count){
    $("#page-inner").html("");
    window.scroll(0,0);
    a_disable_hotel(start,self.msg,count);
  }

  window.a_search_order_selectPage=function(page){
    currentPage=page;
    //console.log(page);
    a_search_order_renderPages(page,8);
  }

  function a_search_order_renderPages(start,count){
    $("#page-inner").html(self.search_item_in);
    window.scroll(0,0);
    a_search_order(start,self.msg,count);
  }

  function a_search_order(page, msg, count){
  	var i = 0;
  	//console.log(msg);
    for(i = page * count ; i < count + page * count && i < msg.length; i++){
      if(i % 2 == 0){
        $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
                      
            "<div class = 'r_type col-sm-6'>Reservation ID  :    "+msg[i].reser_id+
            "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
            "</div><div class = 'r_type col-sm-6'>Customer ID  :    "+msg[i].customer_customer_id+
            "</div><div class = 'r_type col-sm-6'>Other mates  :    "+msg[i].other_mates+
            "</div><div class = 'r_type col-sm-6'>Hotel ID :    "+msg[i].hotel_hotel_id+
            "</div><div class = 'r_type col-sm-6'>Hotel Name :    "+msg[i].hotel_name+
                     
            "</div><div class = 'r_type col-sm-6'>Room Type ID :    "+msg[i].room_type_room_type_id+
            "</div><div class = 'r_type col-sm-6'>Room Type Name :    "+msg[i].room_type_name+
            
            "</div><div class = 'r_type col-sm-6'>Room Num :    "+msg[i].reser_num_room+
            
            "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
            "</div><div class = 'r_type col-sm-6'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
            "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
              
            "</div>"+
                      
            "</div>");
        }
        else {
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
            "<div class = 'r_type col-sm-6'>Reservation ID  :    "+msg[i].reser_id+
            "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
            "</div><div class = 'r_type col-sm-6'>Customer ID  :    "+msg[i].customer_customer_id+
            "</div><div class = 'r_type col-sm-6'>Other mates  :    "+msg[i].other_mates+
            "</div><div class = 'r_type col-sm-6'>Hotel ID :    "+msg[i].hotel_hotel_id+
            "</div><div class = 'r_type col-sm-6'>Hotel Name :    "+msg[i].hotel_name+
                     
            "</div><div class = 'r_type col-sm-6'>Room Type ID :    "+msg[i].room_type_room_type_id+
            "</div><div class = 'r_type col-sm-6'>Room Type Name :    "+msg[i].room_type_name+
            
            "</div><div class = 'r_type col-sm-6'>Room Num :    "+msg[i].reser_num_room+
            
            "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
            "</div><div class = 'r_type col-sm-6'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
            "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
            
            
            
            "</div>"+
            
            "</div>");
        }
        
      }
          
      $('.room_info').css("padding","10px")
      $('.reser_type_b_').css("margin-left","500px")
      $('.reser_type_b').css("margin-left","20px")
      $('.reser_type_b').css("margin-top","20px")
      $('.reser_type_b_ ').css("margin-top","20px")
      $('.reser_type_b').css("background-color", "#087CF3")
      $('.color_white').css("background-color", "#F3F3F3")
      $('.color_grey').css("background-color", "#ffffff");

      i += 1;

      builder="";
      var page = 0;
      for(page=0;page<self.totalPages;page++){
        pages = page + 1;
        builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
        "margin-top: 20px;' onclick='a_search_order_selectPage("+page+")'>"+pages+"</button>";
      }
      $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");

  }

  function a_search_hotel(page, msg, count){
  	
    var i = 0;
    for(i = page * count ; i < count + page * count && i < msg.length; i++){
        
      if(i % 2 == 0){
          
        $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
            "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
          + msg[i].hotel_img + "'></div>"+
          "<div class = 'r_type col-sm-3'>Hotel ID :    "+msg[i].hotel_id+
          "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
          "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
          "</div><div class = 'r_type col-sm-6'>Hotel City :    "+msg[i].hotel_city+
          "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
          "</div><div class = 'r_type col-sm-6'>Hotel Email :    "+msg[i].hotel_email+
          "</div><div class = 'r_type col-sm-3'>Hotel Price :    "+msg[i].hotel_price+
          "</div><div class = 'r_type col-sm-6'>Hotel Status :    "+msg[i].hotel_status+
          "</div>"+
          "</div>");
        }
      
        else {
          
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
            "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
            + msg[i].hotel_img + "'></div>"+
            "<div class = 'r_type col-sm-3'>Hotel ID :    "+msg[i].hotel_id+
            
            "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
            "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
            "</div><div class = 'r_type col-sm-6'>Hotel City :    "+msg[i].hotel_city+
            "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
            "</div><div class = 'r_type col-sm-6'>Hotel Email :    "+msg[i].hotel_email+
            "</div><div class = 'r_type col-sm-3'>Hotel Price :    "+msg[i].hotel_price+
            "</div><div class = 'r_type col-sm-6'>Hotel Status :    "+msg[i].hotel_status+
            "</div>"+
            
            "</div>");
        }
      }

      $('.room_info').css("padding","10px");
      $('.hotel_b').css("margin-top","20px");
      $('.hotel_b').css("background-color", "#087CF3");
      $('.hotel_b').css("margin-left","600px");
      $('.hotel_b').css("font-size","16px");
      $('.color_white').css("background-color", "#F3F3F3");
      $('.color_grey').css("background-color", "#ffffff");
   
    
      
      builder="";
      var page = 0;
      for(page=0;page<self.totalPages;page++){
        pages = page + 1;
        builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
        "margin-top: 20px;' onclick='search_selectPage("+page+")'>"+pages+"</button>";
      }
      $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");
    
  }

  function a_enable_hotel(page, msg, count){
  	
    var i = 0;
    for(i = page * count ; i < count + page * count && i < msg.length; i++){
        
      if(i % 2 == 0){
          
      $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
        "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
        + msg[i].hotel_img + "'></div>"+
        "<div class = 'r_type col-sm-3'>Hotel ID :    "+msg[i].hotel_id+
        "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
        "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
        "</div><div class = 'r_type col-sm-6'>Hotel City :    "+msg[i].hotel_city+
        "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
        "</div><div class = 'r_type col-sm-6'>Hotel Email :    "+msg[i].hotel_email+
        "</div><div class = 'r_type col-sm-3'>Hotel Price :    "+msg[i].hotel_price+
        "</div><div class = 'r_type col-sm-6'>Hotel Status :    "+msg[i].hotel_status+
        "</div>"+
        "<button class = 'col-offset-8 hotel_b btn btn-success enable' id = '"+msg[i].hotel_id+"'>ENABLE HOTEL</button>"+
        "</div>");
      }
      
      else {
          
        $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
          "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
          + msg[i].hotel_img + "'></div>"+
          "<div class = 'r_type col-sm-3'>Hotel ID :    "+msg[i].hotel_id+

          "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
          "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
          "</div><div class = 'r_type col-sm-6'>Hotel City :    "+msg[i].hotel_city+
          "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
          "</div><div class = 'r_type col-sm-6'>Hotel Email :    "+msg[i].hotel_email+
          "</div><div class = 'r_type col-sm-3'>Hotel Price :    "+msg[i].hotel_price+
          "</div><div class = 'r_type col-sm-6'>Hotel Status :    "+msg[i].hotel_status+
          "</div>"+
          "<button class = 'col-offset-8 hotel_b btn btn-success enable' id = '"+msg[i].hotel_id+"'>ENABLE HOTEL</button>"+
          "</div>");
        }
      }

      $('.room_info').css("padding","10px");
      $('.hotel_b').css("margin-top","20px");
      $('.hotel_b').css("background-color", "#087CF3");
      $('.hotel_b').css("margin-left","600px");
      $('.hotel_b').css("font-size","16px");
      $('.color_white').css("background-color", "#F3F3F3");
      $('.color_grey').css("background-color", "#ffffff");
   
    
      
      builder="";
      var page = 0;
      for(page=0;page<self.totalPages;page++){
        pages = page + 1;
        builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
        "margin-top: 20px;' onclick='enable_selectPage("+page+")'>"+pages+"</button>";
      }
      $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");
      $("#page-inner").append("<script src = '/javascripts/able_hotel.js'></script>");
  }

  function a_disable_hotel(page, msg, count){
  	
    var i = 0;
    for(i = page * count ; i < count + page * count && i < msg.length; i++){
        
      if(i % 2 == 0){
          
        $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
          "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
          + msg[i].hotel_img + "'></div>"+
          "<div class = 'r_type col-sm-3'>Hotel ID :    "+msg[i].hotel_id+
          "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
          "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
          "</div><div class = 'r_type col-sm-6'>Hotel City :    "+msg[i].hotel_city+
          "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
          "</div><div class = 'r_type col-sm-6'>Hotel Email :    "+msg[i].hotel_email+
          "</div><div class = 'r_type col-sm-3'>Hotel Price :    "+msg[i].hotel_price+
          "</div><div class = 'r_type col-sm-6'>Hotel Status :    "+msg[i].hotel_status+
          "</div>"+
          "<button class = 'col-offset-8 hotel_b btn btn-success disable' id = '"+msg[i].hotel_id+"'>DISABLE HOTEL</button>"+
          "</div>");
        }
      
        else {
          
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
            "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
            + msg[i].hotel_img + "'></div>"+
            "<div class = 'r_type col-sm-3'>Hotel ID :    "+msg[i].hotel_id+
            
            "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+
            "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
            "</div><div class = 'r_type col-sm-6'>Hotel City :    "+msg[i].hotel_city+
            "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
            "</div><div class = 'r_type col-sm-6'>Hotel Email :    "+msg[i].hotel_email+
            "</div><div class = 'r_type col-sm-3'>Hotel Price :    "+msg[i].hotel_price+
            "</div><div class = 'r_type col-sm-6'>Hotel Status :    "+msg[i].hotel_status+
            "</div>"+
            "<button class = 'col-offset-8 hotel_b btn btn-success disable' id = '"+msg[i].hotel_id+"'>DISABLE HOTEL</button>"+
            "</div>");
        }
      }

      $('.room_info').css("padding","10px");
      $('.hotel_b').css("margin-top","20px");
      $('.hotel_b').css("background-color", "#087CF3");
      $('.hotel_b').css("margin-left","600px");
      $('.hotel_b').css("font-size","16px");
      $('.color_white').css("background-color", "#F3F3F3");
      $('.color_grey').css("background-color", "#ffffff");
   
    
      
      builder="";
      var page = 0;
      for(page=0;page<self.totalPages;page++){
        pages = page + 1;
        builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
        "margin-top: 20px;' onclick='disable_selectPage("+page+")'>"+pages+"</button>";
      }
      $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");
      $("#page-inner").append("<script src = '/javascripts/able_hotel.js'></script>");
  }

	$("#hotel_search").click(function(){
		var s = {
			search_type : "hotel_search"
		};
		$.ajax({
			type : "get",
        	url : "a_backend",
        	dataType : "text",
        	data : s,
        	success: function(msg){
        		msg = JSON.parse(msg);
        		self.msg = msg;
        		self.totalPages = msg.length/7;
        		//console.log(msg);
        		$("#page-inner").html("");
        		$("#page-inner-in").css("height","1280px");
        		a_search_hotel(0,self.msg,7);
        		
        	}
		});
	});

	$("#hotel_enable").click(function(){
		var s = {
			search_type : "hotel_enable"
		};
		$.ajax({
			type : "get",
        	url : "a_backend",
        	dataType : "text",
        	data : s,
        	success: function(msg){
        		msg = JSON.parse(msg);
        		self.msg = msg;
        		self.totalPages = msg.length/7;
        		//console.log(msg);
        		$("#page-inner").html("");
        		$("#page-inner-in").css("height","1280px");
        		a_enable_hotel(0,self.msg,7);
        		
        	}
		});
	});

	$("#hotel_disable").click(function(){
		var s = {
			search_type : "hotel_disable"
		};
		$.ajax({
			type : "get",
        	url : "a_backend",
        	dataType : "text",
        	data : s,
        	success: function(msg){
        		msg = JSON.parse(msg);
        		self.msg = msg;
        		self.totalPages = msg.length/7;
        		$("#page-inner").html("");
        		$("#page-inner-in").css("height","1280px");
        		a_disable_hotel(0,self.msg,7);
        		
        	}
		});
	});
	
	

	$("#order_search").click(function(){
		
        		
      $("#page-inner").html("");
      $("#page-inner").append("<div id = 'search_item_in'>"+
      	"<div class = 'col-sm-12'  style = "+
      	"'background: #f6f6f6; padding-top: 10px; padding-bottom: 5px;'>"+
      	"<div class = 'col-sm-5'>"+
      		"<label >Reservation ID :</label>"+
     		"<input type='text'  id='reser_id' placeholder='Enter Reservation ID' style='width: 60%;'>"+
   			"</div>"+
      	"<div class = 'col-sm-5'>"+
      		"<label >Customer ID :</label>"+
     		"<input type='text'  id='customer_id' placeholder='Enter Customer ID' style='width: 60%;'>"+
   			"</div>"+
   			"<div class = 'col-sm-2'>"+
   			"<button class = 'btn btn-info' id = 'a_search_order_by'>SEARCH</button>"+
   			"</div></div>"+
      	"</div>");
      $("#page-inner").append("<script src = '/javascripts/admin_search_order.js'></script>");
      $("#page-inner-in").css("height","1300px");

      var s = {
			   search_type : "order_all"
		  };

      $.ajax({
          type : "get",
          url : "a_backend",
        	dataType : "text",
        	data : s,
        	success: function(msg){
        		msg = JSON.parse(msg);
        		self.msg = msg;
            self.search_item_in = "<div id = 'search_item_in'>"+$('#search_item_in').html()+"</div>";
        		self.totalPages = msg.length/8;
        		a_search_order(0,self.msg,8);
        		$("#page-inner-in").css("height","1260px");
        	}
		  });
        	
	 });
});
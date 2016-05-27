$(document).ready(function(){
	
  var self = this;

	var search_item_in = "<div id = 'search_item_in'>"+$('#search_item_in').html()+"</div>";
  
  window.a_search_order_by_selectPage=function(page){
      
      currentPage=page;
      console.log(page);
      a_search_order_renderPages(page,8);
  }

	function a_search_order_renderPages(start,count){
      
      $("#page-inner").html(search_item_in);
      $("#reser_id").attr("value", self.reser_id),
      $("#customer_id").attr("value", self.customer_id);
      window.scroll(0,0);
      a_search_order(start,self.msg,count);
  }

  function a_search_order(page, msg, count){
  	
    var i = 0;
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
          
    $('.room_info').css("padding","10px");
    $('.reser_type_b_').css("margin-left","500px");
    $('.reser_type_b').css("margin-left","20px");
    $('.reser_type_b').css("margin-top","20px");
    $('.reser_type_b_ ').css("margin-top","20px");
    $('.reser_type_b').css("background-color", "#087CF3");
    $('.color_white').css("background-color", "#F3F3F3");
    $('.color_grey').css("background-color", "#ffffff");

    i += 1;
      
    builder="";
    var page = 0;

    for(page=0;page<self.totalPages;page++){
      pages = page + 1;
      builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
      "margin-top: 20px;' onclick='a_search_order_by_selectPage("+page+")'>"+pages+"</button>";
    }
    $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");
    $("#page-inner").append("<script src = '/javascripts/admin_search_order.js'></script>");

  }

	$("#a_search_order_by").click(function(){

		  self.reser_id = $("#reser_id").val(),
			self.customer_id = $("#customer_id").val();
		var s = {
			search_type : "order_search",
			reser_id : self.reser_id,
			customer_id : self.customer_id

		};

		$.ajax({
			  type : "get",
        url : "a_backend",
      	dataType : "text",
      	data : s,
        success: function(msg){
        	msg = JSON.parse(msg);
        	self.msg = msg;
        	self.totalPages = msg.length/8;
        	$("#page-inner").html(search_item_in);
        	$("#page-inner-in").css("height","1300px");
        	a_search_order(0,self.msg,8);
        	$("#reser_id").val(self.reser_id);
				  $('#customer_id').val(self.customer_id);
        		
        }
		});
	});
});
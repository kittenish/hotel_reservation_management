$(document).ready(function(){

	var a = $("#mainfont").html();
  $('#main_search').click(function(){
    alert("5678");
  })
	
	$('button.col-offset-8.room_type_b.btn.btn-success').click(function(obj){

		var id = obj.currentTarget.id;
		var s = {
  			search_type : "make_order",
  			room_type : id
  		};
  	$.ajax({
  			type : "get",
  			url : "u_backend",
  			dataType : "text",
  			data : s,
  			success: function(msg){  
                
            msg = JSON.parse(msg);
                
            $("#page-inner").html('');
            
            $("#page-inner").append("<h3 class='' style='margin-left: 20px;padding:30px;'>Confirm Your Reservation </h3>");
            $("#page-inner").append("<div><div class = 'col-sm-7'><p class = 'book_info'>Hotel Name :    "+msg[0].hotel_name+
            	"</p><p class = 'book_info'>Hotel Address : "+msg[0].hotel_addr+""+msg[0].hotel_city+
            	"</p><p class = 'book_info'>Hotel Tel : "+msg[0].hotel_tel+
            	"</p><p class = 'book_info'>Hotel Email : "+msg[0].hotel_email+"</p>" +
            	"<p class = 'book_info'>Room Type :    "+msg[0].room_type_name+
            
              "</p><p class = 'book_info '>Room Standard : "+msg[0].room_standard+
              "</p><p class = 'book_info'>Room Price : "+msg[0].room_price+" RMB"+
              
              "</p><p class = 'book_info '>Room Area : "+msg[0].room_area+" m<sup>2</sup>"+
              "</p><p class = 'book_info'>Room Bed : "+msg[0].room_bed+
              "</p><p class = 'book_info'>Room Wifi : "+msg[0].room_wifi+
              "</p><p class = 'book_info'>Room Cigarette : "+msg[0].room_cigarette+
              "</div><div class = ' col-sm-4' style = 'font-size:large;'> Hotel Photo :"+
              "<div><img class = 'book_img'  src = "+"'../upload/"+ 
              msg[0].hotel_img + "'></div></div>"+
              "<div class = ' col-sm-4' style='font-size:large;'> Room Photo :"+
              "<div><img class = 'book_img'  src = "+"'../upload/"+ 
              msg[0].room_img + "'></div></div></div>"
            );
					  $("#page-inner").append("<div class='book_info'>"+
      			  "<label for='check_in'>Check-in : &nbsp;&nbsp;</label>"+
      			  "<input type='date'  id = 'book_arrive' required>"+
    				  "</div>"+
    				  "<div class=' book_info'>"+
  				    "<label for='check_in'>Check-out : </label>"+
      		    "<input type='date'  id = 'book_leave' required>"+
    			    "</div>"
						);

					  $("#page-inner").append("<button class = 'btn btn-info btn-large book_confirm' id = '"+msg[0].room_type_id+"'> Confirm Now </button>"+
						  "<button class = 'btn btn-info btn-large book_confirm_2'> See More </button>"
						);

					  $(".book_info").css("font-size","large");
            $(".book_info").css("margin","10px");
            $('.book_info').css("margin-left","150px");
            $('.book_img').css("width","270px");
            $('.book_img').css("margin","10px");
            
            $('.book_confirm').css("background-color", "#087CF3");
            $('.book_confirm').css("margin-left","550px");
            $('.book_confirm').css("padding", "10px 20px 10px 20px");
            $('.book_confirm').css("font-size","large");
            $('.book_confirm').css("margin-top","50px");
            $('.book_confirm').css("display","inline");
            
            $('.book_confirm_2').css("background-color", "#ffffff");
            $('.book_confirm_2').css("padding", "6px 27px 6px 27px");
            $('.book_confirm_2').css("font-size","large");
            $('.book_confirm_2').css("color","#087CF3");
            $('.book_confirm_2').css("margin-top","50px");
            $('.book_confirm_2').css("margin-left","80px");
            $('.book_confirm_2').css("border-width","thick");

            $("#page-inner").append(" <script src = '/javascripts/user_book.js'></script>");

        }
  		});
	});
});
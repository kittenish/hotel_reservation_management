$(document).ready(function(){

   var self = this; 
  var search_item_in = "<div id = 'search_item_in'>"+$('#search_item_in').html()+"</div>";
  self.back = "<div id = 'page-inner'>"+$('#page-inner').html()+"</div>";

window.return_button = function(){
    var back = self.back;
    
    $('#page-inner').html(back);
}

    window.scroll(0,0);

    $('button.col-offset-8.hotel_b.btn.btn-success').click(function(obj){
        var id = obj.currentTarget.id;
        var s = {
            search_type : "customer_search_room",
            hotel_id : id
        };
        $.ajax({
            type : "get",
            url : "u_backend",
              dataType : "text",
              data : s,
              
        success:function(msg){
                    msg = JSON.parse(msg);
                    $("#page-inner").html('');
                    $("#page-inner").append("<div class = 'col-sm-6' style = 'display: inline-block;'><h1 style = 'margin-left:20px;margin-top:30px;'>"+msg[0].hotel_name+"</h1>"+
                    
           
            "<div class = 'hotel_info style = 'margin-top:30px;'>Addr&nbsp; :    "+msg[0].hotel_addr+
           
            "</div><div class = 'hotel_info'>City&nbsp; :    "+msg[0].hotel_city+
            "</div><div class = 'hotel_info'>Tel&nbsp;&nbsp;&nbsp; : "+msg[0].hotel_tel+
            "</div><div class = 'hotel_info'>Email : "+msg[0].hotel_email+
            "</div>"+
            "<button class='btn btn-info btn-lg' style = 'padding: 8px;"+
                "font-size: 18px;"+
    "margin-left: 400px;"+
    "margin-top: 50px;' onclick = 'return_button()'>"+
          "<span class='glyphicon glyphicon-home'></span> BACK"+
        "<button>"+
            "</div>"
            );

                    $("#page-inner").append("<img class = 'r_type  r_type_img ' style = 'max-height: 300px; padding-left: 15px; max-width: 45%; display:inline-block; margin-bottom: 15px;' src = "+"'../upload/" 
            + msg[0].hotel_img + "'>");
                    var i = 0;
      while(i<msg.length){
        
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
            "margin-top: 20px;margin-left: 310px;color: #FE3E07;font-weight: 900;'>"+msg[i].room_price+"/day"+
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
            "margin-top: 20px;margin-left: 310px;color: #FE3E07;font-weight: 900;'>"+msg[i].room_price+"/day"+
            "</div>"+
            "<button class = 'col-offset-8 room_type_b btn btn-success' id = '"+msg[i].room_type_id+"'>BOOK NOW</button>"+
            "</div>");
          }
          i = i+1;
   
    }
    $('.room_info').css("padding","10px");
    $('.hotel_info').css("margin-left","40px");
    $('.hotel_info').css("font-size","18px");
      $('.room_type_b').css("margin-top","20px");
      $('.room_type_b').css("background-color", "#087CF3");
      $('.color_white').css("background-color", "#F3F3F3");
      $('.color_grey').css("background-color", "#ffffff");

      $("#page-inner").append(" <script src = '/javascripts/user_book.js'></script>");
            
            }
     });
    });
    

    

});
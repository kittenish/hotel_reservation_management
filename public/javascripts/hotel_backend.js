$(document).ready(function(){
	//$("#myhome").css("background-color","#D6D6FF");

  var msg=[];
    var self=this;

  window.scroll(0,0);

   window.edit_profile = function(){

    window.scroll(0,0);
      //alert("saaaa");
      console.log(self.msg[0].hotel_id);
      $("#page-inner").html('');
      $("#page-inner").append("<h3 class = 'u_profile_h'>Edit Profile </h3>");
      $("#page-inner").append("<p class = 'u_profile u_id' >My_id :    "+self.msg[0].hotel_id+"</p>");
      $("#page-inner").append("<form class='form-horizontal col-offset-8 col-sm-10' role='form' method='post' action = 'u_edit_profile' >"+
  
  "<div class='form-group u_profile'>"+
    "<label for='Password' class='col-sm-2 control-label'>Password *</label>"+
    "<div class='col-sm-10'>"+
      "<input type='password' class='form-control' id='password' name = 'password' value = '"+self.msg[0].hotel_password+"' required>"+
      "<p class='help-block'>Password should be less than 15 characters</p>"+
    "</div>"+
  "</div>"+
  
  "<div class='form-group u_profile'>"+
    "<label  class='col-sm-2 control-label'>Confirm your password *</label>"+
    "<div class='col-sm-10'>"+
      "<input type='password' class='form-control' id='password_confirm' name = 'password_confirm' value = '"+self.msg[0].hotel_password+"' required>"+
      "<p class='help-block'>Please Confirm Password</p>"+
    "</div>"+
  "</div>"+
  
  "<div class='form-group u_profile'>"+
    "<label  class='col-sm-2 control-label'>Tel</label>"+
    "<div class='col-sm-10'>"+
      "<input type='number' class='form-control' id='tel' name = 'tel' value = '"+self.msg[0].hotel_tel+"'>"+
    "</div>"+
  "</div>"+
  
  "<div class='form-group u_profile'>"+
    "<label  class='col-sm-2 control-label'>Email</label>"+
    "<div class='col-sm-10'>"+
      "<input type='email' class='form-control' id='email' name = 'email' value = '"+self.msg[0].hotel_email+"'>"+
    "</div>"+
  "</div>"+

"</form>"+
"<button class = 'btn btn-info col-sm-offset-3' "+
                      "style = 'margin-top: 20px; type = 'submit' >SAVE PROFILE</button>"
);
                    

                  //$(".u_profile").css("font-size","large");
$(".u_profile").css("margin","10px");
$('.u_profile').css("margin-left","100px");
                  $('.u_profile_h').css("margin-left","20px");
                  $('.u_profile_h').css("padding","30px");
                  $('.u_id').css("margin-left","150px");
      $("#page-inner").append("<script src = '/javascripts/hotel_edit_profile.js'></script>");

    }

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
                self.msg=msg;
                	
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
                    $("#page-inner").append("<button class='btn btn-info col-sm-offset-3' style='margin-top: 40px;"+
                      "margin-left: 400px;padding: 10px 20px 10px 20px;' onclick='edit_profile()'"+
                      ">EDIT PROFILE</button>");
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
                self.msg=msg;
                  
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


    $('#h_process_confirm').click(function(){
        
        var s = {
          search_type : 'processed_confirm_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn btn-success reser_confirm' value = '"+msg[i].reser_id+"'> CONFIRM </button>"+
                      "<button class = 'col-offset-8  btn  reject byconfirm' value = '"+msg[i].reser_id+"'> REFUND </button>"+
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn btn-success reser_confirm' value = '"+msg[i].reser_id+"'> CONFIRM </button>"+
                      "<button class = 'col-offset-8  btn  reject byconfirm' value = '"+msg[i].reser_id+"'> REFUND </button>"+
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           $("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });

    $('#h_process_refund').click(function(){
        
        var s = {
          search_type : 'processed_refund_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn  btn-success byrefund' value = '"+msg[i].reser_id+"'> REFUND </button>"+
                      "<button class = 'col-offset-8  btn  reject byreject' value = '"+msg[i].reser_id+"'> REJECT </button>"+
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn btn-success byrefund' value = '"+msg[i].reser_id+"'> REFUND </button>"+
                      "<button class = 'col-offset-8  btn reject byreject' value = '"+msg[i].reser_id+"'> REJECT </button>"+
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           $("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });

  $('#h_process_check-out').click(function(){
        
        var s = {
          search_type : 'processed_check_out_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn  btn-success bycheck-out' value = '"+msg[i].reser_id+"'> CHECK_OUT </button>"+
                      //"<button class = 'col-offset-8  btn  reject byreject' value = '"+msg[i].reser_id+"'> REJECT </button>"+
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn btn-success bycheck-out' value = '"+msg[i].reser_id+"'> CHECK_OUT </button>"+
                      //"<button class = 'col-offset-8  btn reject bycheck-out' value = '"+msg[i].reser_id+"'> REJECT </button>"+
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           $("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });
  
    $('#h_confirm').click(function(){
        
        var s = {
          search_type : 'confirmed_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                     
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           //$("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });

$('#h_refund').click(function(){
        
        var s = {
          search_type : 'refunded_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                     
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           //$("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });

  $('#h_checkin').click(function(){
        
        var s = {
          search_type : 'check_in_ed_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                     
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           //$("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });

  $('#h_complete').click(function(){
        
        var s = {
          search_type : 'completed_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                     
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           //$("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });

  $('#h_all').click(function(){
        
        var s = {
          search_type : 'all_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                     
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           //$("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });

  $('#h_process_check-in').click(function(){
        
        var s = {
          search_type : 'confirmed_reservation'
        };

        $.ajax({
        type : "get",
        url : "h_backend",
        dataType : "text",
        data : s,
        success: function(msg){

            msg = JSON.parse(msg);
            self.msg=msg;
            //console.log("--------");

           $("#page-inner").html('');
           var i = 0;
           while(i<msg.length) {

              if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 reser_info color_grey'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn btn-success reser_check-in' value = '"+msg[i].reser_id+"'> CHECK-IN </button>"+
                      "<button class = 'col-offset-8  btn  reject bycheck-in' value = '"+msg[i].reser_id+"'> REFUND </button>"+
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 reser_info color_white'>"+
                      
                      
                      "<div class = 'r_type col-sm-5'>Reservation Id  :    "+msg[i].reser_id+
                      
                      "</div><div class = 'r_type col-sm-7'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-5'>Room Price : "+msg[i].room_price+
                      "</div><div class = 'r_type col-sm-7'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-5'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-4'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn btn-success reser_check-in' value = '"+msg[i].reser_id+"'> CHECK-IN </button>"+
                      "<button class = 'col-offset-8  btn  reject bycheck-in' value = '"+msg[i].reser_id+"'> REFUND </button>"+
                      "</div>");
        
            }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.reser_info').css("padding","10px");
                  $('.reser_info').css("line-height","2");
                  
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");

                  $('.reject').css("background-color", "#087CF3");
                  $('.reject').css("color", "#ffffff");
                  $('.reject').css("margin-left", "20px");
                  $('.reser_confirm').css("margin-left","0px");



                  

              i += 1;
           }
           $("#page-inner").append("<script src = '/javascripts/hotel_reser.js'></script>");

        }
      });
    });


	
	});
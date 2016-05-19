$(document).ready(function(){
	//$("#myhome").css("background-color","#D6D6FF");
    var msg=[];
    var self=this;
    var totalPages = 0;
  	var inhome = $("#page-inner").html();
  	var search_item = $('#search_item').html();
    window.unpayed_selectPage=function(page){
      currentPage=page;
      console.log(page);
      renderPages(page,6);
  }
  
  window.scroll(0,0);

  function renderPages(start,count){
    
    //1 Clear list
    
    //2 append new items to the list
    console.log("what");
    $("#page-inner").html('');
    unpayed_information(start,self.msg,count);
  }

    

    window.edit_profile = function(){
      //alert("saaaa");
      console.log(self.msg[0].customer_id);
      $("#page-inner").html('');
      $("#page-inner").append("<h3 class = 'u_profile_h'>Edit Profile </h3>");
      $("#page-inner").append("<p class = 'u_profile u_id' >My_id :    "+self.msg[0].customer_id+"</p>");
      $("#page-inner").append("<form class='form-horizontal col-offset-8 col-sm-10' role='form' method='post' action = 'u_edit_profile' >"+
  
  "<div class='form-group u_profile'>"+
    "<label for='Password' class='col-sm-2 control-label'>Password *</label>"+
    "<div class='col-sm-10'>"+
      "<input type='password' class='form-control' id='password' name = 'password' value = '"+self.msg[0].customer_password+"' required>"+
      "<p class='help-block'>Password should be less than 15 characters</p>"+
    "</div>"+
  "</div>"+
  
  "<div class='form-group u_profile'>"+
    "<label  class='col-sm-2 control-label'>Confirm your password *</label>"+
    "<div class='col-sm-10'>"+
      "<input type='password' class='form-control' id='password_confirm' name = 'password_confirm' value = '"+self.msg[0].customer_password+"' required>"+
      "<p class='help-block'>Please Confirm Password</p>"+
    "</div>"+
  "</div>"+
  
  "<div class='form-group u_profile'>"+
    "<label class='col-sm-2 control-label'>Real Name In English *</label>"+
    "<div class='col-sm-10'>"+
      "<input type='text' class='form-control' id='name' name = 'name' value = '"+self.msg[0].customer_name+"' required>"+
    "</div>"+
  "</div>"+
  
  "<div class='form-group u_profile'>"+
    "<label  class='col-sm-2 control-label'>Tel</label>"+
    "<div class='col-sm-10'>"+
      "<input type='number' class='form-control' id='tel' name = 'tel' value = '"+self.msg[0].customer_tel+"'>"+
    "</div>"+
  "</div>"+
  
  "<div class='form-group u_profile'>"+
    "<label  class='col-sm-2 control-label'>Email</label>"+
    "<div class='col-sm-10'>"+
      "<input type='email' class='form-control' id='email' name = 'email' value = '"+self.msg[0].customer_email+"'>"+
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
      $("#page-inner").append("<script src = '/javascripts/edit_profile.js'></script>");

    }

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
                //console.log(msg);
                self.msg=msg;
                	
                    $("#page-inner").html('');
                    
                    $("#page-inner").append("<h3 class = 'u_profile_h'>Detail Information </h3>");
                    $("#page-inner").append("<p class = 'u_profile'>My ID :    "+msg[0].customer_id+
                    	"</p><p class = 'u_profile'>My Name : "+msg[0].customer_name+
                    	"</p><p class = 'u_profile'>My Tel : "+msg[0].customer_tel+
                    	"</p><p class = 'u_profile'>My Email : "+msg[0].customer_email+"</p>");
                    $("#page-inner").append("<button class = 'btn btn-info col-sm-offset-3' "+
                      "style = 'margin-top: 20px;' onclick = 'edit_profile()' >EDIT PROFILE</button>");
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
        self.msg=msg;
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
        self.totalPages = msg.length/6;
        self.msg=msg;
        $("#page-inner").html('');
        unpayed_information(0,self.msg,6);
                
      }
    });
  });


function unpayed_information(page, msg, count){
  var i = 0;
  for(i = page * count ; i < count + page * count && i < msg.length; i++){
    if(i % 2 == 0){
          $("#page-inner").append("<div class = 'col-sm-12 room_info color_grey'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
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
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8 reser_type_b_ btn btn-success pay' value = '"+msg[i].reser_id+"'>PAY</button>"+
                      "<button class = 'col-offset-8 reser_type_b btn btn-success edit' value = '"+msg[i].reser_id+"'>EDIT</button>"+
                      "<button class = 'col-offset-8 reser_type_b btn btn-success delete' value = '"+msg[i].reser_id+"'>DELETE</button>"+
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

                  
                  //$('#page-inner').css("height","1600px");
                  i += 1;
        
        $("#page-inner").append("<script src = '/javascripts/edit_reservation.js'></script>");
        builder="";
        var page = 0;
        //$("#page-inner").append("<div style = 'margin-left: 300px;'>");
        for(page=0;page<self.totalPages;page++){
          pages = page + 1;
          builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
          "margin-top: 20px;' onclick='unpayed_selectPage("+page+")'>"+pages+"</button>";
        }
        $("#page-inner").append("<div style = 'text-align: center;'>"+builder+"</div>");

        
    }

	
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
        self.msg=msg;
        self.totalPages = msg.length/6;
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
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
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
        $("#page-inner").append("<script src = '/javascripts/edit_reservation.js'></script>");
        
      }
    });

  });

  $("#myconfirmed").click(function(){
    var s = {
        search_type : "confirmed_order"
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
        self.msg=msg;
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
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      "<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
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
        $("#page-inner").append("<script src = '/javascripts/edit_reservation.js'></script>");

      }
    });
  });

  $("#mycompleted").click(function(){
    var s = {
        search_type : "completed_order"
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
        self.msg=msg;
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
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      //"<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      //"<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
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

  $("#waiting_refund").click(function(){
    var s = {
        search_type : "apply_refund_order"
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
        self.msg=msg;
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
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      //"<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      //"<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
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
  
  $("#has_refund").click(function(){
    var s = {
        search_type : "refund_reservation"
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
        self.msg=msg;
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
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      //"<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
                      "</div>");
          }
          else {
            $("#page-inner").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
                      "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 150px;' src = "+"'../upload/" 
                      + msg[i].room_img + "'></div>"+
                      "<div class = 'r_type col-sm-8'>Reservation Id  :    "+msg[i].reser_id+
                      "</div><div class = 'r_type col-sm-3'>Hotel Name :    "+msg[i].hotel_name+
                      "</div><div class = 'r_type col-sm-6'>Hotel Addr :    "+msg[i].hotel_addr+" "+msg[i].hotel_city+
                      "<br>"+
                      "</div><div class = 'r_type col-sm-3'>Room Type :    "+msg[i].room_type_name+
                      
                      
                      "</div><div class = 'r_type col-sm-6'>Total Price : "+msg[i].reser_price+
                      "</div><div class = 'r_type col-sm-3'>Check-in :    "+msg[i].reser_begin.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Check-out :    "+msg[i].reser_end.substring(0,10)+
                      "</div><div class = 'r_type col-sm-6'>Reservation Status :    "+msg[i].reser_status+
                      
                      
                      "</div>"+
                      //"<button class = 'col-offset-8  btn  apply_refund' value = '"+msg[i].reser_id+"'> APPLY REFUND </button>"+
                      
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
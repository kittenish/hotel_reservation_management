$(document).ready(function(req, res){

	function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
            var r = window.location.search.substr(1).match(reg);  
            if (r != null) return unescape(r[2]); return null; 
        }
     var hotel_name = getUrlParam('hotel_name').replace('+',' ');
     for(var i = 0; i< hotel_name.length - 1; i++)
     {
     	hotel_name = hotel_name.replace('+',' ');
     }
     console.log(hotel_name);
	$("#s_hotel_name").attr("value", hotel_name);
	$("#s_check_in").attr("value", getUrlParam('check_in'));
	$("#s_check_out").attr("value", getUrlParam('check_out'));
	$("#s_city").val(getUrlParam('city'));
	
	if(getUrlParam('city') != "Beijing" && getUrlParam('city') != "Shanghai" && getUrlParam('city') != "Changchun")
		$("#s_city").val("All");

	//console.log($("#s_city").val());

	var msg=[];
  var totalPages;
  var self=this;

  window.selectPage=function(page){
      currentPage=page;
      console.log(page);
      renderPages(page,6);
  }

  window.scroll(0,0);

  function renderPages(start,count){
    
    //1 Clear list
    
    //2 append new items to the list
    $("#search-content").html("");
    search_information(start,self.msg);
  }

  window.booknow = function(){
		//console.log("saaaaa");
		alert("Please sign in first! ");
	}

	$("#search_hotel").click(function(){
		console.log("sas");
		var s_city = $("#s_city").val(),
  			s_name = $("#s_hotel_name").val(),
  			s_arrival = $("#s_check_in").val(),
  			s_leave = $("#s_check_out").val(),
  			s_price_min = $("#s_room_price_min").val(),
  			s_price_max = $("#s_room_price_max").val(),
  			s_wifi = $("#s_wifi").val(),
  			
  			s_ci = $("#s_cigarette").val();
  			

  		var s = {
  			search_type : "search_hotel",
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
			url : "search",
			dataType : "text",
			data : s,
			success:function(msg){
				msg = JSON.parse(msg);
				//msg = JSON.parse(msg);
        		self.msg = msg;
        		self.totalPages = msg.length/8;
				$("#search-content").html("");
        //var totalPages= msg.length / 6;
        		search_information(0,self.msg);

				
			}
		});

	});

	function search_information(page, msg){
  		var i = 0;
  		for(i = page * 8 ; i < 8 + page * 8 && i < msg.length; i++){
          if(i % 2 == 0){
          $("#search-content").append("<div class = 'col-sm-12 room_info color_grey'>"+
                      
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
                        "margin-top: 20px;margin-left: 275px;color: #FE3E07;font-weight: 600;'>"+msg[i].room_price+"/day"+
                      "</div>"+
                      "<button class = 'col-offset-8 room_type_b btn btn-success' onclick = 'booknow()' id = '"+msg[i].room_type_id+"'>BOOK NOW</button>"+
                      "</div>");
        }
          else {
            $("#search-content").append("<div class = 'col-sm-12 room_info color_white'>"+
                      
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
                        "margin-top: 20px;margin-left: 275px;color: #FE3E07;font-weight: 600;'>"+msg[i].room_price+"/day"+
                      "</div>"+
                      "<button class = 'col-offset-8 room_type_b btn btn-success' onclick = 'booknow()' id = '"+msg[i].room_type_id+"'>BOOK NOW</button>"+
                      "</div>");
          }

                  //$(".room_info").css("margin-bottom","10px");
                  //$('.r_type').css("margin-left","80px");
                  //$('.r_type_r').css("margin-left","20px");
                  //$('.r_type_r').css("padding","30px");
                  
                  $('.room_info').css("padding","10px");
                  //$('.room_info').css("margin","20px");
                  //$('.room_info').css("margin-left","50px");
                  //$('.room_info').css("margin-right","50px");
                  //$('.room_type_b').css("margin-left","250px");
                  $('.room_type_b').css("margin-top","20px");
                  $('.room_type_b').css("background-color", "#087CF3");
                  $('.color_white').css("background-color", "#F3F3F3");
                  $('.color_grey').css("background-color", "#ffffff");
                  
                  //$('#page-inner').css("height","1600px");
          //i += 1;
        }
        builder="";
        var page = 0;
        //$("#page-inner").append("<div style = 'margin-left: 300px;'>");
        for(page=0;page<self.totalPages;page++){
        	pages = page + 1;
            builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
            "margin-top: 20px;' onclick='selectPage("+page+")'>"+pages+"</button>";
        }
        $("#search-content").append("<div style = 'text-align: center;'>"+builder+"</div>");
        //$("#page-inner").append("</div>");
      };


	$("#search_hotel").click();


});
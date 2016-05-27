$(document).ready(function(req, res){

	function getUrlParam(name) {
            
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
      var r = window.location.search.substr(1).match(reg);  
      if (r != null) 
        return unescape(r[2]); 
      return null; 
  }
  
  var hotel_name = getUrlParam('hotel_name').replace('+',' ');
  
  for(var i = 0; i< hotel_name.length - 1; i++)
  {
      hotel_name = hotel_name.replace('+',' ');
  }
     
	$("#s_hotel_name").attr("value", hotel_name);
	$("#s_check_in").attr("value", getUrlParam('check_in'));
	$("#s_check_out").attr("value", getUrlParam('check_out'));
	$("#s_city").val(getUrlParam('city'));
	
  
  setTimeout(function(){
      $("#search_hotel").click();
  });
  

	if(getUrlParam('city') != "Beijing" && getUrlParam('city') != "Shanghai" && getUrlParam('city') != "Changchun")
      $("#s_city").val("All");

	var msg=[];
  var totalPages;
  var self=this;

  window.selectPage=function(page){
      currentPage=page;
      console.log(page);
      renderPages(page,8);
  }

  window.scroll(0,0);

  function renderPages(start,count){
      $("#search-content").html("");
      search_information(start,self.msg,count);
  }

  window.booknow = function(){
		  alert("Please sign in first! ");
	}

  function doSearch()
  {    
    var s_city = $("#s_city").val(),
        s_name = $("#s_hotel_name").val(),
        s_arrival = $("#s_check_in").val(),
        s_leave = $("#s_check_out").val(),
        s_price_min = $("#s_room_price_min").val(),
        s_price_max = $("#s_room_price_max").val();
        
      var s = {
        search_type : "search_hotel",
        city : s_city,
        hotelname : s_name,
        arrival: s_arrival,
        leave : s_leave,
        price_min : s_price_min,
        price_max : s_price_max
      };
      
      $.ajax({
      type : "get",
      url : "search",
      dataType : "text",
      data : s,
      success:function(msg){
          msg = JSON.parse(msg);
          self.msg = msg;
          self.totalPages = msg.length/8;
          $("#search-content").html("");
          search_information(0,self.msg,8);
      }
      });

  
  }
	
  $("#search_hotel").click(doSearch);

	function search_information(page, msg, count){
  		
      var i = 0;
  		for(i = page * count ; i < count + page * count && i < msg.length; i++){
          if(i % 2 == 0){
          $("#search-content").append("<div class = 'col-sm-12 room_info color_grey'>"+
            "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 180px;' src = "+"'../upload/" 
            + msg[i].hotel_img + "'></div>"+
            "<div class = 'r_type col-sm-9 hotel_name'>Hotel Name :    "+msg[i].hotel_name+
            "</div><div class = 'r_type col-sm-9'>Hotel Addr :    "+msg[i].hotel_addr+
           
            "</div><div class = 'r_type col-sm-9'>Hotel City :    "+msg[i].hotel_city+
            "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
            "</div><div class = 'r_type col-sm-2' style = 'font-size: 30px;    color: #F9480B;    padding-top: 20px;'"+
            ">"+msg[i].hotel_price+"/day"+
            "</div>"+
            "<button class = 'col-offset-3 hotel_b btn btn-info btn-lg' id = '"+msg[i].hotel_id+"'>MORE INFO</button>"+
            "</div>");
        }
      
        else {
          
          $("#search-content").append("<div class = 'col-sm-12 room_info color_white'>"+
            "<div><img class = 'r_type  r_type_img col-sm-3' style = 'height: 180px;' src = "+"'../upload/" 
            + msg[i].hotel_img + "'></div>"+
            "<div class = 'r_type col-sm-9 hotel_name'>Hotel Name :    "+msg[i].hotel_name+
            "</div><div class = 'r_type col-sm-9'>Hotel Addr :    "+msg[i].hotel_addr+
            
            "</div><div class = 'r_type col-sm-9'>Hotel City :    "+msg[i].hotel_city+
            "</div><div class = 'r_type col-sm-3'>Hotel Tel : "+msg[i].hotel_tel+
            "</div><div class = 'r_type col-sm-2' style = 'font-size: 30px;    color: #F9480B;    padding-top: 20px;'"+
            ">"+msg[i].hotel_price+"/day"+
            "</div>"+
            "<button class = 'col-offset-3 hotel_b btn btn-info btn-lg' id = '"+msg[i].hotel_id+"'>MORE INFO</button>"+
            "</div>");
          }
         
        }         
        $('.room_info').css("padding","10px");
        $('.room_info').css("font-size","16px");
        $('.hotel_name').css("margin-top","5px");
        $('.hotel_name').css("margin-bottom","15px");
        $('.hotel_name').css("font-size","20px");
        $('.hotel_b').css("margin-top","20px");
        $('.hotel_b').css("margin-left","50px");
        $('.room_type_b').css("margin-top","20px");
        $('.room_type_b').css("background-color", "#087CF3");
        $('.color_white').css("background-color", "#F3F3F3");
        $('.color_grey').css("background-color", "#ffffff");
                  
        builder="";
        var page = 0;
  
        for(page=0;page<self.totalPages;page++){
            pages = page + 1;
            builder+="<button style = 'font-size: medium; padding: 2px 5px 2px 5px;"+
            "margin-top: 20px;' onclick='selectPage("+page+")'>"+pages+"</button>";
        }
        $("#search-content").append("<div style = 'text-align: center;'>"+builder+"</div>");
        $("#search-content").append("<script src = '/javascripts/search_room.js'></script>");
    };


});
$(document).ready(function(){

  var self = this;

  window.scroll(0,0);

  function dateChanged(){
     
      if(!$('#book_arrive').val()||!$('#book_leave').val()||!$('#room_number').val())
          return;

      var _arrive = $('#book_arrive').val(),
          _leave = $('#book_leave').val(),
          _room_type = self.room_type,
          _num = $('#room_number').val();
      var s = {
          search_type : "order_price", 
          arrival : _arrive,
          leave : _leave,
          room_type : _room_type
      };
      //console.log(s);
      $.ajax({
        type : "get",
        url : "u_backend",
        dataType : "text",
        data : s,
        success: function(msg){
          
          msg = parseInt(msg);
          msg = msg * _num;
          msg = msg.toString();
          var s = "Total : ￥" + msg; 
          $("#order_price").html(s);
        }
      });

  }

	$('button.col-offset-8.room_type_b.btn.btn-success').click(function(obj){

		
		var id = obj.currentTarget.id;
		var s = {
  			search_type : "make_order",
  			room_type : id
  		};
      self.room_type = id;
  		$.ajax({
  			type : "get",
  			url : "u_backend",
  			dataType : "text",
  			data : s,
  			success: function(msg){  
            
            setTimeout(function(){
            $('#book_arrive').bind('change',dateChanged);
            $('#book_leave').bind('change',dateChanged);
            $('#room_number').bind('change',dateChanged);
                });
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
              "<label for='check_in'>Check-in : &nbsp;&nbsp;&nbsp;&nbsp;</label>"+
              "<input type='date'  id = 'book_arrive' required>"+
    					"</div>"+
    					"<div class=' book_info'>"+
              "<label for='check_in'>Check-out : &nbsp;</label>"+
              "<input type='date'  id = 'book_leave' required>"+
    					"</div>"
						);
            $("#page-inner").append("<div class = 'book_info'>Room Num : <input type = 'text' id = 'room_number'></div>");
            $("#page-inner").append("<div class = 'book_info'>Other Mates:<input type = 'text' id = 'other_mates'></div>");
            $("#page-inner").append("<p style = 'margin-left: 200px;'>Please fill in ID numbers of your and your mates.</p>");
            $("#page-inner").append("<p style = 'margin-left: 200px;'>Make sure to be no:ID/', eg: 1:1000000/2:1200000 etc </p>")
            $("#page-inner").append("<div id = 'order_price' style = ' font-size: 30px;"+
              "margin-top: 20px;margin-left: 310px;color: #FE3E07;"+
              "font-weight: 500;'>Total : </div>");
					  $("#page-inner").append("<button class = 'btn btn-info btn-large book_confirm'  id = '"+msg[0].room_type_id+"'> Confirm Now </button>"+
						  "<button class = 'btn btn-info btn-large book_confirm_2' > See More </button>"
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


	$('button.btn.btn-info.btn-large.book_confirm_2').click(function(){
		
		$('#myhome').click();
    $("#user__search_hotel").click();
	});

	$('button.btn.btn-info.btn-large.book_confirm').click(function(obj){
		
		var _arrival = $("#book_arrive").val(),
			_leave = $("#book_leave").val(),
      _num = $("#room_number").val(),
      _other_mates = $("#other_mates").val(),
      _price = $('#order_price').html(),
			_roomtypeid = obj.currentTarget.id;
    var i = 0;
    _price = _price.toString();
    _price = _price.substring(9);
    var result_1 = 0,result_2 = 0;
    
    while(_other_mates[i])
    {
      if(_other_mates[i] == ':')
          result_1++;
      if(_other_mates[i] == '/')
          result_2++;
      i++;
    }

		if(_arrival == '' || _leave == '')
		{
			alert("Please Confirm The Time of Your Reservation !");
		}
    else if(result_1 != _num  || (result_2 != _num - 1 ))
    {
      alert("Please fullfill your ID numbers!");
    }
    else if (_arrival >= _leave) 
    {
      alert("Please check your reservation date!")
    }
		else {
		var s = {
			search_type : "make_reser",
			arrival : _arrival,
			leave : _leave,
			roomtypeid : _roomtypeid,
      num : _num,
      price : _price,
      other_mates : _other_mates
		};
		
		$.ajax({
			  type : "get",
  			url : "u_backend",
  			dataType : "text",
  			data : s,
  			success: function(msg){
          
          if(msg == "-1"){
  				$("#page-inner").html('');
          $("#page-inner").append(
            "<h4 class='' style='margin-left: 20px;padding:30px;'>Your reservation has been saved .</h4>"+
            "<h4 class='' style='margin-left: 20px;padding:30px;'>All revisions are acceptable before payment.</h4>"+
            "<h4 class='' style='margin-left: 20px;padding:30px; color: #0606D0;'>Attention : Your reservation will not be confirmed until your pay for it .</h4>"
          );
          window.scroll(0,0);}
          else 
          {
            alert("Sorry only "+msg+" rooms left! What about others?");
          }
  		  }
		});
		
  }
	
	});
});
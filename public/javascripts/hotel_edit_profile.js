$(document).ready(function(){

	$("button.btn.btn-info.col-sm-offset-3").click(function(){
		
		window.scroll(0,0);
		var password = $("#password").val();
		var password_c = $("#password_confirm").val();
		
		var tel = $("#tel").val();
		var email = $("#email").val();

		if(password_c!=password)
			alert("Please keep your password the same!");

		var s = {
			password : password,
			tel : tel,
			email : email
		};

		$.ajax({
			type : "get",
			url : "h_edit_profile",
			dataType : "text",
			data : s,
			success:function(){
					;
			}
		});

		alert("Change Profile Successfully!");
		$("#myprofile").click();
	});

});
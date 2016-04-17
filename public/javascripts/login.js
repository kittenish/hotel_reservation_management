$(function() {
	$("#submit_login").on("click", function() {
		$("#password").val($.md5($("#password").val()))
	})
});
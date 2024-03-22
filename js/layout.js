// lnb, header, footer 를 불러오기 위한 스크립트 입니다
$(function(){
	if($("#lnb").length){
		$("#lnb").load("./_lnb.html");
	}
	if($("#header").length){
		$("#header").load("./_header.html");
	}
	// if($("#footer").length){
	// 	$("#footer").load("_footer.html");
	// }
});

$('#header').load('_header.html');
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-27 07:37:48
 * @version $Id$
 */

$('#user_cancle').on("click",function(){
	window.location.href = "index.html";
});
$('.iOne').on("click",function(){
	$('#edit_name').animate({
		"left":0
	}, 500)
});
$('#edit_name_cancle').on('click',function(){
	$('#edit_name').animate({
		"left":"100%"
	}, 500)
});
$('.iTwo').on("click",function(){
	$('#edit_phone').animate({
		"left":0
	}, 500)
});
$('#edit_phone_cancle').on('click',function(){
	$('#edit_phone').animate({
		"left":"100%"
	}, 500)
});
$('.iThird').on("click",function(){
	$('#edit_address').animate({
		"left":0
	}, 500)
});
$('#edit_address_cancle').on('click',function(){
	$('#edit_address').animate({
		"left":"100%"
	}, 500)
});
$('.iForth').on("click",function(){
	window.location.href = "payDeposit.html";
});
$('.iFive').on("click",function(){
	window.location.href = "renewHistory.html";
});
$('#name_save').on('click',function(){
	var nameHtml = $('.nameInp').val();
	$('.user_name_1').html(nameHtml);
	$('#edit_name').animate({
		"left":"100%"
	}, 500)
});
$('#phone_save').on('click',function(){
	var nameHtml = $('.phoneNumberInp').val();
	$('.user_phone_1').html(nameHtml);
	$('#edit_phone').animate({
		"left":"100%"
	}, 500)
});
$('#address_save').on('click',function(){
	var nameHtml = $('.addressInp').val();
	$('.user_address_1').html(nameHtml);
	$('#edit_address').animate({
		"left":"100%"
	}, 500)
});
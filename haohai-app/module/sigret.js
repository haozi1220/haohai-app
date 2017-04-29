/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-28 15:12:32
 * @version $Id$
 */
$('.cancle').on('click',function(){
	window.location.href = "index.html";
});
$('input[type="email"]').blur(function() {
	var email = $('input[type="email"]').val();
	if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
	   $('.email').html("邮箱格式格式不正确！请重新输入").addClass('warn');
	   $('.sigret_btn').attr('disabled', 'true');
	   $('input[type="email"]').focus();
  	}else{
  		$('.sigret_btn').removeAttr('disabled');
  		$('.email').html("邮箱格式格式正确").removeClass('warn');
  	}
});
$('input[type="password"]').blur(function(event) {
	var password = $('input[type="password"]').val();
	if( password.length < 6 || password.length  >16 ){
		$('.password').html("请输入6-16位密码,不含空格!").addClass('warn');
		$('.sigret_btn').attr('disabled', 'true');
		$('input[type="password"]').focus();
	}else{
		$('.sigret_btn').removeAttr('disabled');
		$('.password').html("密码格式正确").removeClass('warn');
	}
});
$('input[name="password1"]').blur(function() {
	var password = $('input[type="password"]').val();
	var password1 = $('input[name="password1"]').val();
	if( password !== password1 ){
		$('.password1').html('密码不一致').addClass('warn');
		$('.sigret_btn').attr('disabled', 'true');
	}else{
		$('.sigret_btn').removeAttr('disabled');
		$('.password1').empty();
	}
});
$('.sigret_btn').on('click',function(){
	var password = $('input[name="password"]').val();
	var password1 = $('input[name="password1"]').val();
	var email = $('input[name="email"]').val();
	if(!password || !password1 || !email ){
		$('.warning').addClass('warn');
		$('.warning').html("请完善您的注册信息!");
		return ;
	}else{
		$('input').blur();
	}
	window.location.href = "userPage.html";
})
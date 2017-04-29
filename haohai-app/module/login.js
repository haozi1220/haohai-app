/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-28 10:45:06
 * @version $Id$
 */

$('.login_btn').on('click',function(){
	var userName = $('input[name="username"]').val();
	console.log(userName)
	var passWord = $('input[name="password"]').val();
	if( !userName || !passWord ){
		$('.warning').html("请输入用户名或密码");
		return ;
	}else{
		var email = $('input[type="email"]').val();
		if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
		   $('.warning').html("用户名格式不正确！请重新输入");
		   $('input[type="email"]').focus();
		   return ;
	  	}
	}
	window.location.href = "renewHistory.html";
})
$('.sigret_btn').on('click',function(){
	window.location.href = "sigret.html";
})
/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-04-26 07:59:37
 * @version $Id$
 */
$('.btnWrap').on('click',function() {
	console.log(111)
	var infoObj =[];
	infoObj.push($('textarea').val());
	$('input').each(function(index, el) {
		infoObj.push($(this).attr('name')+":"+$(this).val());
	});
	localStorage.setItem('infoObj',infoObj);
	window.location.href = "oneceBorrow.html";
});
$('.cancle').on('click',function(){
	window.location.href = "renewHistory.html"
})
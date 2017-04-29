/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-04-18 14:29:53
 * @version $Id$
 */

var scale=1;
document.write('<meta name="viewport" content="initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+',user-scalable=no"/>');

var html=document.getElementsByTagName('html')[0];
var screenW=html.getBoundingClientRect().width;
html.style.fontSize=screenW/18+"px";

toSize ();
function toSize () {
	var html = document.getElementsByTagName("html")[0];
	var screenW = html.getBoundingClientRect().width;
	html.style.fontSize = screenW/18 + "px";
}
window.addEventListener(
	"orientationchange",
	function(){
		//横竖屏切换之后，会执行这里边的代码
		toSize ();
	},
	false
);
window.addEventListener(
	"resize",
	function(){
		//横竖屏切换之后，会执行这里边的代码
		toSize ();
	},
	false
);
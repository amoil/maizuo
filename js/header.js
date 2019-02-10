var ha=document.getElementsByTagName("header")[0];
var nav=document.getElementsByTagName("nav")[0];
var ma=document.getElementById("main_a");
console.log(34)
window.onscroll=function(){
	var as=document.documentElement.scrollTop;
	if(as>600){
		ha.style.display="block";
		nav.style.position="fixed";
		nav.style.top="0.45rem";
		nav.style.left="0";
		nav.style.zIndex=100;
		ma.style.position="fixed";
		ma.style.top="0.1rem";
		ma.style.color="#000";
		ma.style.background="#fff";
	}else{
		ha.style.display="none";
		nav.style.position="relative";
		nav.style.top="0";
		nav.style.left="0";
		nav.style.zIndex=0;
		ma.style.position="absolute";
		ma.style.top="0.18rem";
		ma.style.color="#fff";
		ma.style.background="rgba(0,0,0,.2)";
	}
}





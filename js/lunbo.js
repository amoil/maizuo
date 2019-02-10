var cu=document.getElementById("pic_u");
var cd=document.getElementById("pic_d");
var lis=document.querySelectorAll("#pic_d li");
var i=0;
console.log(2234)
timer=setInterval(function(){
	i++;
	if(i>=9){
		cu.style.left="0rem";
		i=1;
	}
	move(cu,"left",-3.5*i);
	auto();
},3000)

function auto(){
	for(var j=0;j<lis.length;j++){
		lis[j].style.background="none";
	}
	
}
function move(ele,sty,len){
	clearInterval(ele.timer);
	if(sty==="left"){
		ele.timer=setInterval(function(){
			ele.style.left=ele.offsetLeft-0.01+"rem";
			if(ele.offsetLeft<=len){
				clearInterval(ele.timer);
				ele.style.left=len+"rem";
			}
		})
	}else{
		ele.timer=setInterval(function(){
			ele.style.left=ele.offsetLeft+0.01+"rem";
			if(ele.offsetLeft>=len){
				clearInterval(ele.timer);
				ele.style.left=len+"rem";
			}
		})
	}			
}



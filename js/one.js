var sec=document.getElementsByTagName("section")[0];
var mains=document.getElementById("mains");
function nn(){
	
	var ajax = new XMLHttpRequest;
	ajax.open("get", "php/one.php", true);
	ajax.send(null);
	ajax.onreadystatechange = function () {
	    if (ajax.readyState === 4 && ajax.status === 200) {
	        var data=JSON.parse(ajax.responseText);
			var str="";
			for(var i=0;i<data.length;i++){
				  str+=`<dl>
					<dt><img src="${data[i].imgurl}" ></dt>
					<dd>
						<div class="sec_h"><h3>${data[i].content}</h3><span>2D</span></div>
						<div class="sec_p"><p>观众评分</p><span>${data[i].pingjia}</span></div>
						<div class="sec_o"><p>${data[i].mess}</p></div>
						<div class="sec_m"><p>${data[i].time}</p></div>
					</dd>
					<div class="sec_b"><a href="">购票</a></div>
				</dl>`;
			}
			sec.innerHTML=str;
	     }
	}
}
nn();
var dian=document.getElementById("dian");
dian.onclick=function(ev){
	console.log(35)
	this.innerHTML=`<img src="img/下载%20(10).png" ><span style="color: #ff5f16;">电影</span>`;
	ying.innerHTML=`<img src="img/下载%20(2).png" ><span style="color: #797d82;">我的</span>`;
	yuan.innerHTML=`<img src="img/下载.png" ><span style="color: #797d82;">影院</span>`;
	ev.preventDefault();
	
	var str="";
	str+=`<header>
			<span>电影</span>
		</header>
		<!-- pic -->
		<div id="pic">
			<a id="main_a" href="">大庆&nbsp;&gt;</a>
			<ul id="pic_u">
				<li><img src="img/b03a32d20eac5438d8d130714d4141b9.png" ></li>
				<li><img src="img/29e8c85d1b431a49941720a06337d77c.png" ></li>
				<li><img src="img/5251288237201107a90859d8d6a6b6c8.png" ></li>
				<li><img src="img/6e119514ae3e4e1c7faf3f6272671125.png" ></li>
				<li><img src="img/91beebe8ad9a02c5af4f9f5a4550f2e7.png" ></li>
				<li><img src="img/eb2e8c0c18712ca48237cecb5f1fbb81.png" ></li>
				<li><img src="img/ef4efc0e880821f357b3833b3ff27134.png" ></li>
				<li><img src="img/f357d2a0f794f79a8db194089484bc23.jpg" ></li>
				<li><img src="img/b03a32d20eac5438d8d130714d4141b9.png" ></li>
			</ul>
			<ul id="pic_d">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<!-- nav -->
		<nav>
			<li id="nv1" style="color:#ff5f16;">正在热映</li>
			<li id="nv2">即将上映</li>
			<span></span>
		</nav>
		<!-- section -->
		<section id="section"></section>	
		<!-- aside -->
		<aside id="aside"></aside>
		<div class="bottom"></div>
	`
	
	mains.innerHTML=str;
	var sec=document.getElementById("section")
	var ajax3 = new XMLHttpRequest;
	ajax3.open("get", "php/one.php", true);
	ajax3.send(null);
	ajax3.onreadystatechange = function () {
			if (ajax3.readyState === 4 && ajax3.status === 200) {
					var data=JSON.parse(ajax3.responseText);
			var str="";
			for(var i=0;i<data.length;i++){
					str+=`<dl>
					<dt><img src="${data[i].imgurl}" ></dt>
					<dd>
						<div class="sec_h"><h3>${data[i].content}</h3><span>2D</span></div>
						<div class="sec_p"><p>观众评分</p><span>${data[i].pingjia}</span></div>
						<div class="sec_o"><p>${data[i].mess}</p></div>
						<div class="sec_m"><p>${data[i].time}</p></div>
					</dd>
					<div class="sec_b"><a href="">购票</a></div>
				</dl>`;
			}
			sec.innerHTML=str;
			}
	}
}

var one=document.getElementById("nv1");
var two=document.getElementById("nv2");
var ospan=document.querySelector("nav span");
var ying=document.getElementById("ying");
var yuan=document.getElementById("yuan");
var pin=document.getElementById("pin");
var dian=document.getElementById("dian");
var mains=document.getElementById("mains");
var asd=document.getElementsByTagName("aside")[0];
var sec=document.getElementsByTagName("section")[0];
one.onclick=function(){
	two.style.color="#000";
	this.style.color="#ff5f16";
	ospan.style.left="0.55rem";
	asd.style.display="none";
	sec.style.display="block";
}
two.onclick=function(){
	one.style.color="#000";
	this.style.color="#ff5f16";
	ospan.style.left="2.15rem";
	sec.style.display="none";
	asd.style.display="block";
}

var lis=document.querySelectorAll("footer li");
console.log(lis);
lis[0].onclick=function(){
	console.log(45)
}
for(var z=0;z<lis.length;z++){
	lis[z].onclick=function(){
		for(var j=0;j<lis.length;j++){
			lis[j].style.color="#797d82";
			
			}
		this.style.color="#ff5f16";
	}
	
}
yuan.onclick=function(ev){
	console.log(34)
	this.innerHTML=`<img src="img/下载%20(12).png" ><span style="color: #ff5f16;">影院</span>`;
	dian.innerHTML=`<img src="img/下载%20(13).png" ><span style="color: #797d82;">电影</span>`;
	ying.innerHTML=`<img src="img/下载%20(2).png" ><span style="color: #797d82;">我的</span>`;
	ev.preventDefault();
	mains.innerHTML=`
		<div class="header"><a id="main_a" href="" style="top:0.1rem;color:#000;background:#fff;">大庆&nbsp;&gt;</a><h3>影院</h3></div>
		<div class="nav"><li>全城&nbsp;&gt;</li><li>最近去过&nbsp;&gt;</li></div>
		<div class="section">
			<dl>
				<dt><h3>幸福蓝海国际影城（大庆店）</h3><p>黑龙江大庆市让胡路区中原路3号松雷购物休闲广场五层</p></dt>
				<dd><h3>￥31.5起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>大庆恒大影院</h3><p>大庆市龙凤区青龙山东街珠江路南大庆恒大绿洲住宅18号及恒大剧场三层</p></dt>
				<dd><h3>￥26起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>大庆环球时代影城乘风巨幕店</h3><p>大庆市乘风庄乘二村灯岗南20米原钻井一公司文化活动中心</p></dt>
				<dd><h3>￥28起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>大庆环球时代影城远望店</h3><p>大庆市让胡路区中央大街南段409号大自然洗浴对面</p></dt>
				<dd><h3>￥28起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>幸福蓝海国际影城（大庆店）</h3><p>黑龙江大庆市让胡路区中原路3号松雷购物休闲广场五层</p></dt>
				<dd><h3>￥31.5起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>大庆恒大影院</h3><p>大庆市龙凤区青龙山东街珠江路南大庆恒大绿洲住宅18号及恒大剧场三层</p></dt>
				<dd><h3>￥26起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>大庆环球时代影城乘风巨幕店</h3><p>大庆市乘风庄乘二村灯岗南20米原钻井一公司文化活动中心</p></dt>
				<dd><h3>￥28起</h3><p>距离未知</p></dd>
			</dl>
			<dl>
				<dt><h3>大庆环球时代影城远望店</h3><p>大庆市让胡路区中央大街南段409号大自然洗浴对面</p></dt>
				<dd><h3>￥28起</h3><p>距离未知</p></dd>
			</dl>
		</div>
	`;
}
ying.onclick=function(ev){
	this.innerHTML=`<img src="img/下载%20(11).png" ><span style="color: #ff5f16;">我的</span>`;
	dian.innerHTML=`<img src="img/下载%20(13).png" ><span style="color: #797d82;">电影</span>`;
	yuan.innerHTML=`<img src="img/下载.png" ><span style="color: #797d82;">影院</span>`;
	ev.preventDefault();
	mains.innerHTML=`
		<div class="login"><img src="img/下载 (3).png"/><span>立即登录</span></div>
		<div class="log">
			<dl>
				<dt><img src="img/下载 (4).png"/></dt>
				<dd>电影订单</dd>
			</dl>
			<dl>
				<dt><img src="img/下载 (5).png"/></dt>
				<dd>拼团订单</dd>
			</dl>
		</div>
		<div class="may">
			<li><img src="img/下载 (6).png" /><span>卖座卡</span><img src="img/下载 (9).png" /></li>
			<li><img src="img/下载 (7).png" /><span>余额</span><img src="img/下载 (9).png" /></li>
			<li><img src="img/下载 (8).png" /><span>设置</span><img src="img/下载 (9).png" /></li>
		</div>
	`;
}

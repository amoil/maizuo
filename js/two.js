var asd=document.getElementsByTagName("aside")[0];
var ajax2 = new XMLHttpRequest;
ajax2.open("get", "php/two.php", true);
ajax2.send(null);
ajax2.onreadystatechange = function () {
    if (ajax2.readyState === 4 && ajax2.status === 200) {
        var data=JSON.parse(ajax2.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
				<dt><img src="${data[i].imgurl}" ></dt>
				<dd>
					<div class="sec_h"><h3>${data[i].content}</h3><span>2D</span></div>
					<div class="sec_p"></div>
					<div class="sec_o"><p>${data[i].mess}</p></div>
					<div class="sec_m"><p>${data[i].time}</p></div>
				</dd>
				<div class="sec_b"><a href="">预购</a></div>
			</dl>`;
		}
		asd.innerHTML=str;
     }
}
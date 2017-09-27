window.onload=function(){
	
	//window.onblur=function(){}解决点击返回顶部轮播图混乱
	//在切换标签页时，前一个标签页虽然失去焦点，但函数一直在运行。返回原来的页面时，定时器快速得尽兴重绘页面		//返回顶部
		// var top=document.getElementById('top');
		// var timertop  = null;
		// top.onclick = function(){
		//     cancelAnimationFrame(timertop);
		//     timertop = requestAnimationFrame(function fn(){
		//         var oTop = document.body.scrollTop || document.documentElement.scrollTop;
		//         if(oTop > 0){
		//             scrollTo(0,oTop-50);
		//             timertop = requestAnimationFrame(fn);
		//         }else{
		//             cancelAnimationFrame(timertop);
		//         }    
		//     });
		// }


	
	//阻止双击时文本被选中,背景变蓝色
	// if(document.all){
	//     document.onselectstart= function(){return false;}; //for ie
	// }else{
	//     document.onmousedown= function(){return false;};
	//     document.onmouseup= function(){return true;};
	// }
	// document.onselectstart = new Function('event.returnValue=false;');



	var banner=document.querySelector('.banner');
	var sliderMain=document.querySelector('.slider-main');
	var imgs=sliderMain.children;//子元素节点
	var oImg=document.querySelector('.img');
	var slider_ctrl=document.querySelector('.slider-ctrl');
	//文本
	var spans=slider_ctrl.children;//获取所有的span
	// spans[1].setAttribute('class','slider-ctrl-con current');//第二个span高亮显示
	for(var i=0;i<imgs.length; i++) {

	    var span = document.createElement("span");// 创建 span
	    span.className = "slider-ctrl-con"; // 添加类名
	    span.innerHTML = imgs.length-i;  //  6 - 0     6 - 1   // 实现 倒序 的方式插入
	    slider_ctrl.insertBefore(span,slider_ctrl.children[1]);  // 再 父亲 倒数第二个盒子的前面插入
	}

	// 元素可见区域的宽度(大盒子宽度)
	var scrollWidth=banner.clientWidth;
	for (var i = 1; i < imgs.length; i++) {
	    imgs[i].style.left=scrollWidth+'px';
	}//初始化图片位置

	var iNow=0;//记录当前位置
	for( var k in spans){//遍历数组
	    // console.log(k);
	    // console.log(spans[k]);
	    spans[k].onclick=function(){
	        if (this.className=='slider-ctrl-prev'){
	            animate(imgs[iNow],{'left':scrollWidth});//当前图片缓动去右边
	            iNow--;
	            if (iNow<0) {iNow=imgs.length-1;}
	            imgs[iNow].style.left=-scrollWidth+'px';//快速地走到左边排好队
	            animate(imgs[iNow],{'left':0});//下一张图片缓动去当前位置
	            setSquare();
	        }else if(this.className=='slider-ctrl-next'){
	            autoPlay();
	        }
	        else{
	            // console.log('下边的一排按钮');
	            var that=this.innerText-1;//获得当前被点击的按钮对应图片的索引值
	            if(that > iNow){//同右侧按钮
	                animate(imgs[iNow],{left:-scrollWidth});
	                imgs[that].style.left=scrollWidth+'px';//快速地走到右边排好队                
	            }else if (that < iNow) {//同左侧按钮
	                animate(imgs[iNow],{left:scrollWidth});
	                imgs[that].style.left=-scrollWidth+'px';//快速地走到右边排好队
	            }
	            iNow=that;//当前的显示的和选中的一样，赋值
	            animate(imgs[iNow],{'left':0});
	            setSquare();
	        }
	        highLight();
	    }
	}
	spans[1].className='slider-ctrl-con current';
	function setSquare() {
	   //  清除所有的span current   留下 满足需要的拿一个
	    for(var i=1;i<spans.length-1;i++){   //  8个span   我们要 1-6  不要 7  索引号
	        spans[i].className = "slider-ctrl-con";
	    }
	    spans[iNow+1].className = "slider-ctrl-con current";  // 记住 + 1
	}
	// 自动
	//添加定时器
	var timer=null;
	timer=setInterval(autoPlay,2000);//从右往左


	// 大盒子移入移出事件
	banner.onmouseover=function(){
	    clearInterval(timer);
	}
	banner.onmouseout=function(){
	    clearInterval(timer);
	    timer=setInterval(autoPlay,2000);
	}
	// 给1-6号span添加高亮
	function highLight() {
	    for (var i = 1; i < spans.length-1; i++) {
	        spans[i].className='slider-ctrl-con';
	    }
	    spans[iNow+1].className='slider-ctrl-con current';
	}
	function autoPlay(){
	    animate(imgs[iNow],{'left':-scrollWidth});//当前图片缓动去左边
	    iNow++;
	    iNow%=imgs.length;
	    imgs[iNow].style.left=scrollWidth+'px';//快速地走到右边排好队
	    animate(imgs[iNow],{'left':0});//下一张图片缓动去当前位置
	    highLight();
	}



	function animate(obj,json,fn) {  // 给谁    json
	    clearInterval(obj.timer);
	    obj.timer = setInterval(function() {
	        var flag = true;  // 用来判断是否停止定时器   一定写到遍历的外面
	        for(var attr in json){   // attr  属性     json[attr]  值
	            //开始遍历 json
	            // 计算步长    用 target 位置 减去当前的位置  除以 10
	            // console.log(attr);
	            var current = 0;
	            if(attr == "opacity")
	            {
	                current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
	                console.log(current);
	            }
	            else
	            {
	                current = parseInt(getStyle(obj,attr)); // 数值
	            }
	            // console.log(current);
	            // 目标位置就是  属性值
	            var step = ( json[attr] - current) / 10;  // 步长  用目标位置 - 现在的位置 / 10
	            step = step > 0 ? Math.ceil(step) : Math.floor(step);
	            //判断透明度
	            if(attr == "opacity")  // 判断用户有没有输入 opacity
	            {
	                if("opacity" in obj.style)  // 判断 我们浏览器是否支持opacity
	                {
	                    // obj.style.opacity
	                    obj.style.opacity = (current + step) /100;
	                }
	                else
	                {  // obj.style.filter = alpha(opacity = 30)
	                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";

	                }
	            }
	            else if(attr == "zIndex")
	            {
	                obj.style.zIndex = json[attr];
	            }
	            else
	            {
	                obj.style[attr] = current  + step + "px" ;
	            }

	            if(current != json[attr])  // 只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
	            {
	                flag =  false;
	            }
	        }
	        if(flag)  // 用于判断定时器的条件
	        {
	            clearInterval(obj.timer);
	            //alert("ok了");
	            fn&&fn(); 
	        }
	    },10)
	}
	function getStyle(obj,attr) {  //  谁的      那个属性
	    if(obj.currentStyle)  // ie 等
	    {
	        return obj.currentStyle[attr];  // 返回传递过来的某个属性
	    }
	    else
	    {
	        return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
	    }
	}

	var product1=document.querySelector('.product1');
	var product2=document.querySelector('.product2');
	var btnLeft=document.getElementById('mainleft');
	var btnRight=document.getElementById('mainright');
	var slider1=document.getElementById('slider1');
	var slider2=document.getElementById('slider2');
	var num=0;
	function fn(btn){
		btn.onclick=function(){
			if(num==0){
				product1.classList.add("hidden");
				product2.classList.remove("hidden");
				slider1.classList.remove("change");
				slider2.classList.add("change");
				num=1;
			}else if(num==1){
				product2.classList.add("hidden");
				product1.classList.remove("hidden");
				slider1.classList.add("change");
				slider2.classList.remove("change");
				num=0;
			}
		}
	}
	fn(btnLeft);
	fn(btnRight);
	fn(slider1);
	fn(slider2);

	var oBackTop = document.getElementById('backTop');
	var btTimer = null;
	var initTop = document.documentElement.clientHeight - 100;
	oBackTop.style.top = initTop + 'px';
	window.onscroll = function(){
		oBackTop.style.transition = '.5s';
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		oBackTop.style.top = scrollTop + document.documentElement.clientHeight - 100 +'px';
	}
	oBackTop.onclick = function(){
		clearInterval(btTimer);
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		oBackTop.style.transition = 'none';
		oBackTop.style.top = document.documentElement.clientHeight - 100 +'px';

		console.log(scrollTop,initTop);
		if (scrollTop>initTop) {
			btTimer = setInterval(function(){
				if (scrollTop>0) {
					scrollTop-=110;
					scrollTo(0,scrollTop-100);
				}else{
					scrollTop =0;
				}
			},50);
		}else{
			return;
		}
		
	}

	
}
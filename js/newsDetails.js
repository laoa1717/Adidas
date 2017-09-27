window.onload=function(){
	var box = document.getElementById('box');
	var nav = document.getElementsByTagName('nav')[0];
	var aDiv = box.getElementsByTagName('div');
	var aSpan = nav.getElementsByTagName('span');
	var arrOne = [aDiv[4],aDiv[5]]; //存-220%
	var arrTwo = [aDiv[2],aDiv[3]]; //存220%
	var num = 0;
	var addNum = 6;  //第7张图片进arrOne
	var delNum = 0;  //第2张图片进arrTwo
	var adTimer = null;
	left220();
	bannerAutoPlay();
	function left220(){
		for (var i = 0; i < arrOne.length; i++) {
			arrOne[i].style.left = '-220%';
		}
		for (var i = 0; i < arrTwo.length; i++) {
			arrTwo[i].style.left = '220%';
		}
	}
	function bannerAutoPlay(){
		clearInterval(adTimer);
		adTimer = setInterval(function(){
			move();
		},2000);
	}
	function move(){
		//先清空transition
		for (var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.transition = '';
		}
		aDiv[num].style.transition = '1s';
	    aDiv[num].style.left = '-110%';
	    num++;
	    if (num==aDiv.length) {
	    	num=0;
	    }
	    aDiv[num].style.transition = '1s';
	    aDiv[num].style.left = '0';
	    arrTwo[0].style.transition = '1s';
	    arrTwo[0].style.left = '110%';
	    aDiv[addNum].style.transition = '1s';
	    arrOne.push(aDiv[addNum]);
		arrTwo.push(arrOne.shift());
		arrTwo.shift();
	    if (addNum==6) {
			addNum=-1;
		}
		addNum++;
		left220();
	}
	nav.onmouseover = function(){
		clearInterval(adTimer);
	}
	nav.onmouseout = function(){
		bannerAutoPlay();
	}
	aSpan[0].onclick=function(){
		nav.style.height = 500 + 'px';
		box.style.width = 1200 + 'px';
		move();
	}
	aSpan[1].onclick=function(){
		nav.style.height = 500 + 'px';
		box.style.width = 1200 + 'px';
		//先清空transition
		for (var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.transition = '';
		}
		aDiv[num].style.transition = '1s';
	    aDiv[num].style.left = '110%';
	    num--;
	    if (num==-1) {
	    	num=aDiv.length-1;
	    }
	    aDiv[num].style.transition = '1s';
	    aDiv[num].style.left = '0';
	    arrOne[1].style.transition = '1s';
	    arrOne[1].style.left = '-110%';
	    if (addNum==6) {
			delNum=1;
		}else if(addNum==5){
			delNum=0;
		}else if(addNum==4){
			delNum=6;
		}else if(addNum==3){
			delNum=5;
		}else if(addNum==2){
			delNum=4;
		}else if(addNum==1){
			delNum=3;
		}else if(addNum==0){
			delNum=2;
		}
	    aDiv[delNum].style.transition = '1s';
	    arrTwo.unshift(aDiv[delNum]);
	    arrOne.unshift(arrTwo.pop());
	    arrOne.pop();
		if (addNum==0) {
			addNum=aDiv.length;
		}
		addNum--;
		left220();
	}
	//小banner放大功能
	var aBoxDiv = box.getElementsByTagName('div');
	var asBanner = [];
	for (var i = 1; i < aBoxDiv.length; i++) {
		asBanner.push(aBoxDiv[i].getElementsByTagName('img')[1]);
	}
	for (var i = 0; i < asBanner.length; i++) {
		asBanner[i].onmouseover = function(){
			this.style.transform = 'translateX(-50%) scale(1.5)';
		}
		asBanner[i].onmouseout = function(){
			this.style.transform = 'translateX(-50%) scale(1)';
		}
	}
	//鼠标滚轮改变banner大小功能
	document.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop>=300) {
			nav.style.height = 650 + 'px';
			box.style.width = '100%';
		}
	}
	//产品特效
	var aProductLi = document.querySelectorAll('.product_list_item li');
	var aProductDesc = document.querySelectorAll('.product_list_item_desc');
	var aProductBtn = document.querySelectorAll('.product_list_item_btn');
	for (let i = 0; i < aProductDesc.length; i++) {
		aProductLi[i].onmouseover = function(){
			aProductDesc[i].style.transform = 'scaleY(0)';
			aProductBtn[i].style.transform = 'scaleY(1)';
		};
		aProductLi[i].onmouseout = function(){
			aProductDesc[i].style.transform = 'scaleY(1)';
			aProductBtn[i].style.transform = 'scaleY(0)';
		}
	}
	//产品选项nav
	var oProductNav = document.getElementById('product_nav');
	var aProductNavLi = oProductNav.getElementsByTagName('li');
	var aProductItem = document.querySelectorAll('.product_list_item');
	for (let i = 0; i < aProductNavLi.length; i++) {
		aProductNavLi[i].onclick = function(){
			for (let j = 0; j < aProductNavLi.length; j++) {
				aProductNavLi[j].className = '';
				aProductItem[j].className = 'product_list_item';
			}
			this.className = 'active';
			aProductItem[i].className = 'product_list_item active';
		}
	}

	//article部分
	var aRightIcon = document.querySelectorAll('.right-icon');
	var aArticleBtn = document.querySelectorAll('#article_main ul li a');
	var aArticleLi = document.querySelectorAll('#article_main ul li');
	var aArticleI = document.querySelectorAll('#article_main ul li i');
	for (let i = 0; i < aArticleBtn.length; i++) {
		aArticleBtn[i].onmouseover = function(){
			aRightIcon[i].style.right = -40 + 'px';
		}
		aArticleBtn[i].onmouseout = function(){
			aRightIcon[i].style.right = -25 + 'px';
		}
		aArticleLi[i].onmouseover = function(){
			aArticleI[i].className = 'mask active';
		}
		aArticleLi[i].onmouseout = function(){
			aArticleI[i].className = 'mask';
		}
	}

	//carousel右边部分
	var aCarouselA = document.querySelectorAll('#carousel_right_btn a');
	var aCarouselRightIcon =document.querySelectorAll('#carousel_right_btn a>span>span');
	for (let i = 0; i < aCarouselA.length; i++) {
		aCarouselA[i].onmouseover = function(){
			aCarouselRightIcon[i].style.right = -40 + 'px';
		}
		aCarouselA[i].onmouseout = function(){
			aCarouselRightIcon[i].style.right = -25 + 'px';
		}
	}
	//carousel左边部分--轮播图
	var carousel = document.getElementById('carousel_left');
	var aImgs = ['images/newsDetails/miadidas-pc_07.jpg','images/newsDetails/miadidas-pc_08.jpg','images/newsDetails/miadidas-pc_09.jpg'];
	var cUl = document.querySelector('#carousel_left>ul');
	var cImg = document.querySelectorAll('#carousel_left>ul img');
	var cLi = document.querySelectorAll('#carousel_select>ul>li');//轮播图里的小点点
	cImg[0].src = aImgs[0];
	var cTimer = null;
	var cNum = 0;
	autoPlay();
	function autoPlay(){
		clearInterval(cTimer);
		cTimer = setInterval(function(){
			for (var i = 0; i < cLi.length; i++) {
				cLi[i].className = '';
			}
			cNum++;
			if (cNum==aImgs.length) {
				cNum=0;
			}
			cImg[1].src = aImgs[cNum];
			cLi[cNum].className = 'active';
			doMove(cUl,'left',50,-500,function(){
				cUl.style.left = 0;
				cImg[0].src = aImgs[cNum];
			});
		},3000);
	}
	carousel.onmouseover = function(){
		clearInterval(cTimer);
	}
	carousel.onmouseout = function(){
		autoPlay();
	}
	for (let i = 0; i < cLi.length; i++) {
		cLi[i].onclick = function(){
			for (var j = 0; j < cLi.length; j++) {
				cLi[j].className = '';
			}
			this.className = 'active';
			cImg[0].src = aImgs[i];
			cNum = i;
		}
	}

	//info
	var aInfoA = document.querySelectorAll('#info>ul>li>a');
	var aInfoIcon =document.querySelectorAll('#info>ul>li>a>span>span');
	for (let i = 0; i < aInfoA.length; i++) {
		aInfoA[i].onmouseover = function(){
			aInfoIcon[i].style.right = -40 + 'px';
		}
		aInfoA[i].onmouseout = function(){
			aInfoIcon[i].style.right = -25 + 'px';
		}
	}
	var oArea = document.querySelectorAll('#link>area')[1];
	var oWechat = document.querySelector('.wechatcode');
	oArea.onmouseover = function(){
		oWechat.style.transform = 'scale(1)';
	}
	oArea.onmouseout = function(){
		oWechat.style.transform = 'scale(0)';
	}












	function getStyle ( obj, attr ) { 
			return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
		}
	function doMove ( obj, attr, dir, target, endFn ) {
		dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
		clearInterval( obj.mTimer );
		obj.mTimer = setInterval(function () {
			var speed = parseInt(getStyle( obj, attr )) + dir;		
			if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
				speed = target;
			}
			obj.style[attr] = speed + 'px';
			if ( speed == target ) {
				clearInterval( obj.mTimer );
				endFn && endFn();
			}
		}, 50);
	}
}
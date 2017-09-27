var hsInput=document.getElementById('header_search');
var searchInput=document.getElementsByClassName('searchinput')[0];
var imgshopping=document.getElementById('shopping_icon');
var oIFaSearch=document.getElementsByClassName('fa fa-search')[0];
hsInput.onfocus=function(){
	searchInput.style.width="200px";
	imgshopping.style.display="none";
	this.value='';
	oIFaSearch.style.color="rgb(32,150,210)";
}
hsInput.onblur=function(){
	searchInput.style.width="150px";
	imgshopping.style.display="block";
	oIFaSearch.style.color="black";
	this.value='搜索';
}
var f_weixinico=document.querySelector('.icon-icon-');
var footerWeixin=document.getElementById('footer_weixin');
f_weixinico.onmouseover=function(){
	footerWeixin.style.display='block';
}
	f_weixinico.onmouseout=function(){
	footerWeixin.style.display='none';
}

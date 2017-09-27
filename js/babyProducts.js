var goods=document.getElementById('goods');
var img_box=document.getElementById('img_box');
var aDiv=img_box.getElementsByTagName('div');
var control=document.getElementById('control');
var aSpan=control.getElementsByTagName('span');
// 实现主推产品切换
var Width=parseInt(getStyle(aDiv[0],'width'))*4+4*10;
var Width1=parseInt(getStyle(aDiv[0],'width'))*3+3*10;
// 当分辨率>四张图片宽度时
if(document.documentElement.clientWidth>Width){
	goods.style.width=Width+'px';
	var num=aSpan.length;
	imgBox(num,img_box);
}
 // 当分辨率>三张图片宽度时
if(document.documentElement.clientWidth<Width){
	goods.style.width=Width1+'px';
	var span=document.createElement('span');
	 control.appendChild(span);
	var num1=aSpan.length;
	imgBox(num1,img_box);
}
function imgBox(num){
  for(var i=0;i<aSpan.length;i++){
    aSpan[i].index=i;
    aSpan[i].onclick=function(){
      for(var j=0;j<aSpan.length;j++){
         aSpan[j].className="";
      }
      aSpan[this.index].className="active";
      img_box.style.left=-goods.offsetWidth*this.index-15+'px';
    }
  }
}
function getStyle(obj,attr){
   return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
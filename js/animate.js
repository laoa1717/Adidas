function animate(obj,target){
        clearInterval(obj.timer);  // 先清除定时器
        var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
        obj.timer = setInterval(function() {
            var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
            obj.style.left = obj.offsetLeft + speed + "px";
            if(Math.abs(result)<=15)  // 如果差值不小于 5 说明到位置了
            {
                clearInterval(obj.timer);
                obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
            }
        },10)
    }
    window.onload = function() {


         var Nav =document.getElementById('football-nav');
          var see =document.getElementById('see');
         var Lis = Nav.children;
         var tab =document.getElementById('football-tab');
         var tabs = tab.children;

 var a = $('#see').width();
var b=a-40;
         for(var i=0; i<Lis.length;i++)
         {
             Lis[i].index = i;  // 获得当前第几个小li 的索引号
             Lis[i].onmouseover = function() {
                 for(var j=0;j<Lis.length;j++)
                 {
                     Lis[j].className = "notactive";  // 所有的都要清空
                 }
                 this.className = "";
                 animate(tab,-this.index*b)
                 // 调用动画函数  第一个参数  谁动画     第二个  走多少
                 square = key = this.index;  // 当前的索引号为主
             }
  
         }        
    
    }
window.onload=function(){
    (function(){
        
        
        var flag=1;
       //购物车事件
       //添加购买商品图片到购物车
      $(".item").on("click",function(){
        var num=1
        $(".show-num").val(num);
          var txt=$(this).find(".goods-title").find("span").eq(0).text();
          var src=$(this).find("img").eq(0).attr("src");
          var money=$(this).find(".bottom").find("span").text();
          $(".goods-money").find("span").eq(1).text(money);
          $(".shoping-img").attr({src:src});
          $(".shoping-explain").text(txt);
             //商品数量的增加和减少
      $(".fa-plus").on("click",function()
      { 
          num=num+1;
          $(".show-num").val(num);
          $(".goods-money").find("span").eq(1).text(money*num);
      })
      $(".fa-minus").on("click",function()
      { 
        num=num-1;
          if(num>0)
          {
          $(".show-num").val(num);
          $(".goods-money").find("span").eq(1).text(money*num);}
      })
      $("#clearing").click(function(){
           $(".over-shoping").animate({
               height:"100px"
           })
      })
      $(".fa-times").click(function(){
        $(".over-shoping").animate({
            height:"0px"
        })
     })
      })
   
        //筛选排序(价格从低到高)
        $(".btn1-option").find("ul").find("li").eq(1).on("click",function(){
        sortRankLow();
        })
        //筛选排序(价格从高到低)
        $(".btn1-option").find("ul").find("li").eq(0).on("click",function(){
            sortRankHigh();
            })
        //轮播图
        $(".left").on("click",function(){
            $('.banner-items').find("ul").animate({
                left:"0px"
            })
        })
        $(".right").on("click",function(){
            if($('.banner-items').find("ul").css("left")==0)
            {
                return 0;
            }
            $('.banner-items').find("ul").animate({
                left:"-50px"
            })
        })
        //下拉菜单
        
        function stopPropagation(e) {
            if (e.stopPropagation)
              e.stopPropagation();//停止冒泡  非ie
            else
              e.cancelBubble = true;//停止冒泡 ie
          }
        $(document).on("click",function(){
            $(".btn1-option").css("display","none")
            $(".btn1").find(".level").find('.fa-level-up').css("display","none")
            $(".btn1").find(".level").find('.fa-level-down').css("display","block")
        })
     //防止冒泡
        $(".pagesize").find(".btn1").on("click",function(e){
         if(flag==1){
              $(".btn1").find(".level").find('.fa-level-up').css("display","block")
              $(".btn1").find(".level").find('.fa-level-down').css("display","none")              
            // $("btn1").find("span").eq(0).add('<i class="fa fa-level-up" aria-hidden="true"></i>');
            $(".btn1-option").css("display","block")
            flag=0;
         }
         else if(flag==0){
            $(".btn1").find(".level").find('.fa-level-up').css("display","none")
            $(".btn1").find(".level").find('.fa-level-down').css("display","block")     
            $(".btn1-option").css("display","none")
             flag=1;
        }
        stopPropagation(e); 
        })
     //鼠标划入事件
        $(".item").on("mouseover",function(){
            $(this).css("width","22.5%");
            $(this).find(".color-items").css("display","flex")
            $(this).addClass("boxshadow");
            $(this).find(".icon").css("display","inline-block");
            //点击事件
            $(".item1").on("click",function(){
                clickShowImg(".item1","shoe3")
            })
            $(".item2").on("click",function(){
                clickShowImg(".item2","shoe4")
            })
            $(".item3").on("click",function(){
                clickBannerShowImg(".item3","shoebanner")
            })
            $(".item4").on("click",function(){
                clickBannerShowImg(".item4","shoebanner1")
            })
            $(".item5").on("click",function(){
                clickBannerShowImg(".item5","shoebanner2")
            })
        })
        //鼠标移出事件
        $(".item").on("mouseout",function(){
            $(this).css("width","23%");
            $(this).find(".color-items").css("display","none")
            $(this).removeClass("boxshadow");
            $(this).find(".icon").css("display","none");
        })
    })()
}
function clickShowImg(obj,num){
    $(obj).parent().parent().find("img").attr({src:"./images/shopping/"+num+".jpg"})
}
function clickBannerShowImg(obj,num)
{
$(obj).parent().parent().parent().parent().find("img").attr({src:"./images/shopping/"+num+".jpg"})
}
function sortRankLow(){
    var arr=[];
    var d;
    for(var i=0;i<4;i++)
    {
                      
        arr.push($(".item").eq(i).find(".bottom").find("span"))
    }
    
    for(var i=0;i<4;i++)
    { 
        
        for(var j=0;j<4;j++)
        {
            if(arr[i].text()<arr[j].text())
            {  
             d=arr[j];
             arr[j]=arr[i];
             arr[i]=d;
            }
        }
        
    }
    for(var i=0;i<4;i++)
    {
      arr[i].parent().parent().css("order",i);
    }
}
function sortRankHigh(){
    var arr=[];
    var d;
    for(var i=0;i<4;i++)
    {
                      
        arr.push($(".item").eq(i).find(".bottom").find("span"))
    }
    
    for(var i=0;i<4;i++)
    { 
        
        for(var j=0;j<4;j++)
        {
            if(arr[i].text()<arr[j].text())
            {  
             d=arr[j];
             arr[j]=arr[i];
             arr[i]=d;
            }
        }
        
    }
    for(var i=0;i<4;i++)
    {
      arr[i].parent().parent().css("order",-i);
    }
}
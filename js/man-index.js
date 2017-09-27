$(document).ready(function(){
	//打开邮箱订阅
    $('.mail-subscription').mouseenter(function(){
		$('.mail-subscription-content').show('slow');
	});
	 $('.mail-subscription-content').mouseleave(function(){
	 	$('.mail-subscription-content').hide('slow');
	 });
	 //打开导航栏
	 $('.events-menus-nav li').mouseenter(function(){
	 	$(this).addClass('is-active')
	 	       .siblings().removeClass('is-active');
        $(this).find('.submenu-list').show();
	 });
	  $('.events-menus-nav li').mouseleave(function(){
	  	$(this).removeClass('is-active')
	 	$('.submenu-list').hide();
	 });
	 $('.submenu-list').mouseleave(function(){
	 	$(this).hide();
	 	$(this).parent().parent().removeClass('is-active');
	 });


	var i=0;//控制图片
	var j=0;//控制小按钮

    //右边按钮
	$('.next-button').click(function(){
	 	//点击右键，左边即可点击
	 	$(".prev-button").removeClass("disabled");
	 	 //底下小框变颜色
	    j++;
	    if(j==4){
            j=3;
        }
	 	$('.footer-intro li').eq(j).addClass('active')
                                   .siblings().removeClass('active');
         //图片移动
        if(i==-144){
	   		i=-144;
	   	}else{
	   		i=i-48;
	   	}
        $('.con-intro').animate({left:i+'rem'},2000,function(){
		    if(i==-144){
		        $(".next-button").addClass("disabled");
		    }
        });
       
    });

       //左边按钮
    $('.prev-button').click(function(){
	    $(".next-button").removeClass("disabled");

	    j--;
	    if(j==-1){
         	j=0;
        }
	   	$('.footer-intro li').eq(j).addClass('active')
                                    .siblings().removeClass('active');

	   	if(i==0){
	   		i=0;
	   	}else{
	   		i=i+48;
	   	}
        $('.con-intro').animate({left:i+'rem'},2000,function(){
			if(i==0){
			    $(".prev-button").addClass("disabled");
			} 
        });
	});

	//微信图片出现
  $('.icon-wechat').mouseenter(function(){
  	$('.picture img').slideDown();
  })
  $('.icon-wechat').mouseleave(function(){
  	$('.picture img').slideUp();
  })
})
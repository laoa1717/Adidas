$(document).ready(function(){
	// menu
	for (let i = 0; i < $('.navbar-nav li').length; i++) {
		if (i==3||i==6) {
			
		}else{
			$('.navbar-nav li').eq(i).mouseenter(function(){
				$(this).addClass("active").siblings().removeClass('active');
				$('#s-menu').slideDown("slow");
				if(i>=4&&i<7){
					$("#s-menu ul").eq(i-1).show().siblings().hide();
				}else if(i==7){
					$("#s-menu ul").eq(i-2).show().siblings().hide();
					
				}else{
					$("#s-menu ul").eq(i).show().siblings().hide();
				}
			})
		}
	$('#s-menu').mouseleave(function(){
			$('.navbar-nav li').eq(i).removeClass('active');
			$('#s-menu').slideUp("slow");
			$("#s-menu ul").eq(i).slideUp("slow");
		})
	
//header-char
	$('.header-char').mouseenter(function(){
		$('.header-char a i').removeClass('icon-cart').addClass('icon-cart-hover');
		console.log($(this));
	})
	$('.header-char').mouseleave(function(){
		$('.header-char a i').removeClass('icon-cart-hover').addClass('icon-cart');
	})
}
	


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

})
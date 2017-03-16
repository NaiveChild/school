$(function(){
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
	});
	
	
	$(".school .school-title").find("li").each(function(index){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".school-content ul").hide().eq(index).show();
		});
		
	});
	
	//点击加载更多
	var flag=1;
	$(" .school .school-content button").click(function(){
		if(flag==1){
			$(this).text("点击收起更多");
			$(".school .school-content .add").show();
			flag=2;
		}else{
			$(this).text("点击加载更多");
			$(".school .school-content .add").hide();
			flag=1;
		}
	});
});

$(function(){
	//优选留学方案
	var flag=1;
	$("#xiala").click(function(){
		if(flag==1){
			$(this).css("transform","rotate(180deg)");
			$(".plan .add").show();
			flag=2;
		}else{
			$(this).css("transform","rotate(0deg)");
			$(".plan .add").hide();
			flag=1;
		}
	});
});

//留学头条
function roll(){
	$(".news ul li:first").animate({"marginTop": "-0.3rem"},1000,function(){
		$(this).css("marginTop", 0).appendTo($(".news ul"));
	});
}
setInterval(roll,1000);


//侧边栏
$(function(){
	var flag=1;
	$("#btn").click(function(){
		if(flag==1){
			$(this).attr("src","images/ico_btn2.png");

			$(".right-list").css("right",0);
			$("header,section,footer").css("transform","translateX(-2.55rem)");
			flag=2;
		}else{
			$(this).attr("src","images/ico_btn2_hov.png");
			$(".right-list").css("right","-2.55rem");
			$("header,section,footer").css("transform","translateX(0)");
			flag=1;
		}
	});
});

//底部
$(function(){
	$(".foot ul").find("li").each(function(index){
		$(this).hover(function(){
//			console.log(111);
//			console.log(index);
			$(this).find("img").attr("src","images/ico-b-nav-"+(index+1)+"-on.png");
			$(this).find("p").css("color","#fe3c24");
		},
		function(){
			$(this).find("img").attr("src","images/ico-b-nav-"+(index+1)+".png");
			$(this).find("p").css("color","#919191");
		});
	});
});

//弹框
$(function(){
	$("#btn-tel").click(function(){
		$(".advertisement").show();
		$(".bgc").show();
		clearInterval(timer);
	});
	$("#close").click(function(){
		$(".advertisement").hide();
		$(".bgc").hide();
		clearInterval(timer);
		timer=setInterval(appear, 8000);
	});
	$(".bgc").click(function(){
		$(".advertisement").hide();
		$(".bgc").hide();
		clearInterval(timer);
		timer=setInterval(appear, 8000);
	});


	function appear(){
		$(".advertisement").show();
		$(".bgc").show();
	}

	// var timer=setInterval(appear, 3000);
});

//动画
$(function(){
	var flag=1;
	$("#icon-btn").click(function(){
		if(flag==1){
			$(this).attr("src","images/ico_btn23.png");
			$("#btn-qq img:nth-child(1)").animate({"left":"1.21rem"},500);
			$("#btn-qq img:nth-child(2)").animate({"left":"2.18rem"},500);
			$("#btn-qq img:nth-child(3)").animate({"left":"3.15rem"},500);
			$("#btn-qq img:nth-child(4)").animate({"left":"4.12rem"},500);
			$("#btn-qq img:nth-child(5)").animate({"left":"5.09rem"},500);
			flag=2;
		}else{
			$(this).attr("src","images/ico_btn22.png");
			$("#btn-qq img:nth-child(1)").animate({"left":"0.12rem"},500);
			$("#btn-qq img:nth-child(2)").animate({"left":"0.12rem"},500);
			$("#btn-qq img:nth-child(3)").animate({"left":"0.12rem"},500);
			$("#btn-qq img:nth-child(4)").animate({"left":"0.12rem"},500);
			$("#btn-qq img:nth-child(5)").animate({"left":"0.12rem"},500);
			flag=1;
		}
	});
	
	
	$("#gotop").click(function(){
//		console.log(222);
		$('body,html').animate({scrollTop:0},800);
	});
	
});




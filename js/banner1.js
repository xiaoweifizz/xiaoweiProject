$(function(){

var aLis1 = $('#slider_img1 li'); //所有的图片
	var iW1 = aLis1.eq(0).width(); //运动的宽度

	//1、动态创建焦点
	var html = '';
	for(var i = 0; i < aLis1.length; i++) {
		html += '<span>' + i + '</span>';
	}
	console.log(html);
	$('#light1').html(html);
	$('#light1 span').eq(0).addClass('active1');

	//2、开定时器让图片动起来
	//图片统一放在右侧，第一张图片放在可视区

	$('#slider_img1 li').css('left', iW1 + 'px');
	$('#slider_img1 li').eq(0).css('left', 0);

	//开定时器运动
	var now = 0;
	var timer = null;

	clearInterval(timer);
	timer = setInterval(next, 2000); //每隔两秒切换一个图片

	function next() {
		//旧
		$('#slider_img1 li').eq(now).animate({
			'left': -iW1
		}, 1000);

		now = ++now > $('#slider_img1 li').length - 1 ? 0 : now;
		//		//新
		$('#slider_img1 li').eq(now).css('left', iW1 + 'px');
		$('#slider_img1 li').eq(now).animate({
			'left': 0
		}, 1000);
		light();
	}
	//3.焦点跟随

	function light() {
		$('#light1 span').eq(now).addClass('active1').siblings().removeClass('active1');
	}

	//鼠标经过停下来
	$('#banner1').hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(next, 2000);
	});

	//4.点击焦点切换图片
	$('#light1 span').click(function(){
		
		if($(this).index()>now){
			//右侧切入
			$('#slider_img1 li').eq(now).animate({
			'left': -iW1
		}, 1000);
			$('#slider_img1 li').eq($(this).index()).css('left', iW1 + 'px');
			$('#slider_img1 li').eq($(this).index()).animate({
			'left': 0
		}, 1000);
			now=$(this).index();
			light();
		}else if($(this).index()<now){
			//从左侧进入
			$('#slider_img1 li').eq(now).animate({
			'left': iW1
		}, 1000);
			$('#slider_img1 li').eq($(this).index()).css('left', -iW1 + 'px');
			$('#slider_img1 li').eq($(this).index()).animate({
			'left': 0
		}, 1000);
			now=$(this).index();
			light();
		}
	});
	})
$(function(){
	$('.header_one_li').mouseenter(function(){

	$('.header_show_one').css('display','block');


	$('.header_one_li').mouseleave(function(){
	$('.header_show_one').css('display','none');

	})


})

	$('.header_two_li').mouseenter(function(){

	$('.header_show_two').css('display','block');


	$('.header_two_li').mouseleave(function(){
	$('.header_show_two').css('display','none');

	})

	
})
	$('.ul_one').on('click','li',function(){
		
		location.href='http://localhost:18060/html/goodslist.html'
	})

	$('.ul_two').on('click','li',function(){
		
		location.href='http://localhost:18060/html/goodslist.html'
	})

})
	

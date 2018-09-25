$(function(){

	// $('#allGoods').mouseenter(function(){
	// 	$('.ul_two').css('display','block');
	// 	$('.ul_two li').hover(function(){
	// 		$('.ul_two li').css('background','white');
	// 	})
	// })
	// $('.ul_two').mouseleave(function(){
	// 	$('.ul_two').css('display','none');
	// })


// 	$('#allGoods').hover(function(){

// 		$('.ul_two').css('display','block')
// 	})

// $('.ul_two').mouseleave(function(){
// 		$('.ul_two').css('display','none');
// 	})

	//前端请求数据
	$.ajax({
        type: "get",
        url: "../api/goodslist.php",
        async: true,
        success: function(str){
            var res=str;
			var goodslist = JSON.parse(res);
			// console.log(goodslist)
		

			$('.hotGoods_first_ul').html(goodslist.map(function(item){
				return `<li class='hotGoods_first_li' data-id='${item.id}'>
					<div class='hotGoods_first_img'>
						<img src="${item.imgurl}">
					</div>
					<ul class='hotGoods_second_ul'>
						<li><a href="#">${item.title}</a></li>
						<li><b>￥</b><em>${item.price}</em></li>
						<li><a href="#">立即抢购</a></li>
					</ul>
				</li>`


			}).join(''));


			$('.goodsDetails_first_ul').html(goodslist.map(function(item){
				return `<li class='hotGoods_first_li' data-id='${item.id}'>
					<div class='hotGoods_first_img'>
						<img src="${item.imgurl}">
					</div>
					<ul class='hotGoods_second_ul'>
						<li><a href="#">${item.title}</a></li>
						<li><b>￥</b><em>${item.price}</em></li>
						<li></li>
						<li><a href="#">查看详情</a><a href="">点击收藏</a></li>
					</ul>
				</li>`
			}).join(''))

			$('.left_side_two_ul').html(goodslist.map(function(item){
				return `<li class='hotGoods_first_li' data-id='${item.id}'>
					<div class='hotGoods_first_img'>
						<img src="${item.imgurl}">
					</div>
					<ul class='hotGoods_second_ul'>
						<li><a href="#">${item.title}</a></li>
						<li><b>￥</b><em>${item.price}</em></li>
						<li><span></span></li>
						<li><a href="#">快速购买</a><a class='goToCar' href="">加入购物车</a></li>
					</ul>
				</li>`
			}).join('')) 
        }
    })
	// console.log($('.goodsDetails_first_ul'));

	
	$('.hotGoods_first_ul').on('click','.hotGoods_first_li',function(e){
			location.href='goodsdetails.html'
			var currentLi= $(this).attr('data-id');
			// $.cookie('id', 'currentLi', { expires: 7, path: 'goodsdetails.html' });
			Cookie.set('id',currentLi,{path: '/'})


		})

	$('.goodsDetails_first_ul').on('click','.hotGoods_first_li',function(e){
			var currentLi= $(this).attr('data-id');
			location.href='goodsdetails.html'
			// $.cookie('id', 'currentLi', { expires: 7, path: 'goodsdetails.html' });
			Cookie.set('id',currentLi,{path: '/'})


		})



	
})
$(function(){
	//拿到详情页后端返回的数据	




	var currentLiId = Cookie.get('id');
	console.log(currentLiId)
	$.ajax({
        type: "get",
        url: "../api/goodsdetails.php",
        async: true,
        data: {
        	'id':currentLiId
        },
        success: function(str){
        	console.log(str)
            var res=str;
			var goodslist = JSON.parse(res);
			// console.log(goodslist[0].imgurl);

			$('.good_details_head p').html(goodslist[0].title)
			$('.good_details_second p strong em').html(goodslist[0].price)
			// $('.MagTargetImg').attr('src',goodslist[0].imgurl);
			// $('.MagTargetImg').attr('data-src',goodslist[0].imgurl);
			// $('.MagTargetImg').attr('data-maxSrc',goodslist[0].imgurl);

			// $('.on img').attr('src',goodslist[0].imgurl);
			// $('.on img').attr('data-lsrc',goodslist[0].imgurl);
			// $('.on img').attr('data-maxSrc',goodslist[0].imgurl);



		}
			})

	$('.chooseColor').on('click','li',function(){
		$('.chooseColor li').removeClass('active1');
		$(this).addClass('active1');
		$('.hasChoose strong:nth-child(2)').html($(this).html());
	})
	$('.chooseSize').on('click','li',function(){
		$('.chooseSize li').removeClass('active');
		$(this).addClass('active');
		$('.hasChoose strong:last-child').html($(this).html());
	})

	$('.good_details_last_3 span:nth-child(4)').on('click',function(){
		if($('.numChange').val()>=19){
			$('.numChange').val('20');
			// $('.good_details_last_3 span:nth-child(4)').css('background','white');
		}else{
			// $('.good_details_last_3 span:nth-child(4)').css('background','#ccc');
			$('.numChange').val($('.numChange').val()*1+1);
		}

	})

	$('.good_details_last_3 span:nth-child(2)').on('click',function(){
		
		if($('.numChange').val()<=1){
			$('.numChange').val('1');
		}
		else{
				$('.numChange').val($('.numChange').val()*1-1);
			}

	})


	//点击加入购物车 页面数量改变


	$('.good_details_last_5 a:nth-child(2)').on('click',function(){
		console.log(666)
		$('.car a:first-child span').html($('.numChange').val())
	//同时把数量传给后端保存到数据库
	var IDCookie = Cookie.get('id');
	var num = $('.numChange').val();

	console.log(IDCookie);
	$.ajax({
        type: "get",
        url: "../api/buycar.php",
        async: true,
        data: {
        	'num':num,
        	'id':IDCookie
        	},
        success: function(str){
        	console.log(str);
            var res=str;
			var goodslist = JSON.parse(res);
			}
		})
		
	})

	//点击去结算 跳转购物车
	$('.gocar').on('click',function(){
		location.href='../html/buycar.html'
	})



	//飞入购物车
	// 点击添加到购物车实现飞入动画效果
            $('.good_details_last_5').on('click','.goTocar',function(event){
                
                    $(function(){
                        // 飞入到哪个地方？  但是这个没生效 所以直接写死购物车的位置
                        var offset = $("#cart").offset();
                        // 获取到照片的路径
                        var img = $('.MagTargetImg').attr('data-src');
                        console.log(img)
                        // 执行插件
                        var flyer = $('<img class="u-flyer" src="'+img+'">');
                        flyer.fly({
                            start:{
                                //（光标的位置）当前点击的位置（必填）#fly元素会被设置成position: fixed  不能用page  页面长的时候出现了滚动条 
                                left: 370, 
                                top: 400
                               //开始位置（必填）
                            },
                            end:{
                                left: 1250, //结束位置（必填）
                                top: 155, //结束位置（必填）
                                width: 0, //结束时宽度
                                height: 0 //结束时高度
                            },
                            // onEnd: function(){ //结束回调 执行提示信息
                            //    $(".msg").show().animate({width: '250px'}, 200).fadeOut(1000); 
                            // }
                        });
                    });
            })


})
$(function(){

//用户名框
	//获得焦点的时候，显示内容：4-20位字符，可由英文、数字组成
	var regUsername = /^[0-9a-zA-Z]{4,20}$/;

	$('#yonghuming').focus(function(){
		if($('#yonghuming').val()==''){
		$('#yonghumingTips').css('display','block');
		}

	})
	//失去焦点的时候判断
	$('#yonghuming').blur(function(){

		
		//判断用户名不为空的时候 去掉提示

		if($('#yonghuming').val()!=''){
			$('#yonghumingTips').css('display','none');
	
		}

		//判断用户名长度小于4的时候 提示用户名长度必须在4-20位之间
		if($('#yonghuming').val().length<4){
			$('#yonghumingTips').text('用户名长度必须在4-20位之间');
			$('#yonghumingTips').css('display','block');
	

			}
		//判断用户名长度大于或等于4 但不满字符类型的时候 提示

		if($('#yonghuming').val().length>=4 && !regUsername.test($('#yonghuming').val())){
			$('#yonghumingTips').text('用户名必须由字母和数字组成');
			$('#yonghumingTips').css('display','block');


			}
		//判断用户名为空的时候 提示用户名不能为空
		if($('#yonghuming').val()==''){
			$('#yonghumingTips').text('用户名不能为空');
			$('#yonghumingTips').css('display','block');
			
			
		}
		})

		
		

	//当输入字符的时候判断
	$('#yonghuming').on('input',function(){
		$('#yonghumingTips').css('display','none');
			
			if(!regUsername.test($('#yonghuming').val())){
				$('#yonghumingTips').text('4-20位字符，可由英文、数字组成');
				$('#yonghumingTips').css('display','block');
				return false;
			}
		})



//密码框
	//获得焦点的时候，显示内容：4-20位字符，可由英文、数字组成
	var regPassword = /^[0-9a-zA-Z_\-=!?\/><@#$%~`,.]{6,16}$/;
	
	$('#password').focus(function(){
		if($('#password').val()==''){

		$('#passwordTips').css('display','block');
		}

	})
	//失去焦点的时候判断
	$('#password').blur(function(){

		//判断密码为空的时候 提示密码不能为空
		if($('#password').val()==''){
			$('#passwordTips').text('密码不能为空');
			$('#passwordTips').css('display','block');
			
		}
		//判断密码不为空的时候 去掉提示

		if($('#password').val()!=''){
			$('#passwordTips').css('display','none');
			
		}
		

		//判断密码全部为数字的时候 提示
		if(/^[\d]*$/.test($('#password').val())){
			$('#passwordTips').text('密码不能全为数字，请使用字母、数字、符号至少2种的组合');
			$('#passwordTips').css('display','block');

			}
		//判断密码全部为字母的时候 提示
		if(/^[a-zA-Z]*$/.test($('#password').val())){
			$('#passwordTips').text('密码不能全为字母，请使用字母、数字、符号至少2种的组合');
			$('#passwordTips').css('display','block');

			}
		//当密码和数字为两种以上组合时 提示取消
		if(/^(\d|[a-zA-Z])*((\d[a-zA-Z])|([a-zA-Z]\d))(\d|[a-zA-Z])*$/.test($('#password').val())){
			$('#passwordTips').css('display','none');

			}
		//判断密码长度小于6的时候 提示用户名长度必须在6-16位之间
		if($('#password').val().length<6){
			$('#passwordTips').text('密码长度必须在6-16位之间');
			$('#passwordTips').css('display','block');

			}
		//判断密码为空的时候 提示密码不能为空
		if($('#password').val()==''){
			$('#passwordTips').text('密码不能为空');
			$('#passwordTips').css('display','block');
			
		}
		})

		
	//当输入字符的时候判断
	$('#password').on('input',function(){
		
		$('#passwordTips').html(`<div><span></span><span></span><span></span></div>`);
		$('#passwordTips div span').css('font-size','17px');
		$('#passwordTips div span').css('color','white');

		$('#passwordTips div span').css('text-align','center');

		$('#passwordTips div span').addClass('active');
		$('#passwordTips').css('display','block');
	        var myPassword=$('#password').val();
	        // 弱:判断密码是否为数字
	        var ruo=/[0-9]|[A-Za-z]*/
	        if(ruo.test(myPassword)){
	           $('#passwordTips div span:first-child').css('background','#FFCC00');
			   $('#passwordTips div span:first-child').text('弱');

	        }  

	        //一般:判断密码是否为数字字母组合
	        var mid=/^(\d|[a-zA-Z])*((\d[a-zA-Z])|([a-zA-Z]\d))(\d|[a-zA-Z])*$/
	        if(mid.test(myPassword)){
			$('#passwordTips div span:first-child').css('background','#FFCC00');
			$('#passwordTips div span:first-child').text('');

			$('#passwordTips div span:nth-child(2)').css('background','#FF9900');
			$('#passwordTips div span:nth-child(2)').text('中');
	            
	        }  

	        // 当密码强度够高时隐藏提示
	        var str=/^(\d|[a-zA-Z])*((\d[a-zA-Z])|([a-zA-Z]\d))(\d|[a-zA-Z])*[\W_]$/
	        if(str.test(myPassword)){
	        $('#passwordTips div span:first-child').css('background','#FFCC00');
			$('#passwordTips div span:first-child').text('');
			$('#passwordTips div span:nth-child(2)').css('background','#FF9900');
			$('#passwordTips div span:nth-child(2)').text('');
			$('#passwordTips div span:nth-child(3)').css('background','#FF6600');
			$('#passwordTips div span:nth-child(3)').text('强');   
	        }  
            
		})

//确认密码：
		

		//获得焦点的时候，显示内容：请再次输入密码
		$('#ensurePassword').focus(function(){
			if($('#ensurePassword').val()==''){
			$('#ensurePasswordTips').css('display','block');
			}

	})
		//失去焦点的时候判断
			$('#ensurePassword').blur(function(){

			//判断密码不为空的时候 去掉提示

			if($('#ensurePassword').val()!=''){
			$('#ensurePasswordTips').css('display','none');
			
			}
			//判断密码不与上面密码一致的时候 提示密码不一致
			
			if($('#password').val()!=$('#ensurePassword').val()){
			$('#ensurePasswordTips').text('密码不一致');
			$('#ensurePasswordTips').css('display','block');
			
		}

		//判断密码为空的时候 提示请重新输入密码;
		if($('#ensurePassword').val()==''){
			$('#ensurePasswordTips').text('请重新输入密码');
			$('#ensurePasswordTips').css('display','block');
		}
	})

//邮箱

		//获得焦点的时候，显示内容:请输入邮箱，用来找回密码、接受订单通知等
		$('#Email').focus(function(){
			if($('#Email').val()==''){
			$('#EmailTips').css('display','block');
			}

	})
		//失去焦点的时候判断
		var regEmail =/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
		$('#Email').blur(function(){
			console.log(666)
			if(!regEmail.test($('#Email').val())){
			$('#EmailTips').text('邮箱格式不正确');
			$('#EmailTips').css('display','block');
			}else{
			$('#EmailTips').css('display','none');

			}
		})
//推荐人
		//获得焦点的时候，显示内容:推荐人用户名，区分大小写
		$('#tuijian').focus(function(){
			if($('#tuijian').val()==''){
			$('#tuijianTips').css('display','block');
			}

	})
		//失去焦点的时候判断
			$('#tuijian').blur(function(){

			//判断密码不为空的时候 去掉提示

			if($('#tuijian').val()==''){
			$('#tuijianTips').css('display','none');
		}
			else{
				$('#tuijianTips').css('display','none');
			}
			
			
})

//活动代码
		//获得焦点的时候，显示内容:推荐人用户名，区分大小写
		$('#action').focus(function(){
			if($('#action').val()==''){
			$('#actionTips').css('display','block');
			}

	})
		//失去焦点的时候判断
			$('#action').blur(function(){

			//判断密码不为空的时候 去掉提示

			if($('#action').val()==''){
			$('#actionTips').css('display','none');
		}
			else{
				$('#actionTips').css('display','none');
			}
			
			
})

//验证码
		//获得焦点的时候，显示内容:请输入图片中的数字
		$('#codeNow').focus(function(){
			if($('#codeNow').val()==''){
			$('#codeNowTips').css('display','block');
			}

	})
		//失去焦点的时候判断
			$('#codeNow').blur(function(){

			//判断当输入验证码与生成验证码不一致的时候 提示

			if($('#codeNow').val()==''){
			$('#codeNowTips').text('请输入验证码');
			$('#codeNowTips').css('display','block');
		};

			if($('#codeNow').val()!=$('#nowCode').text()){
			$('#codeNowTips').text('验证码输入错误！');
			$('#codeNowTips').css('display','block');

		};

			if($('#codeNow').val()===$('#nowCode').text()){
			$('#codeNowTips').css('display','none');
		}			
	})
		$('.checkCode').on('click',function(){
			$('#nowCode').css('width','63px');
			$('#nowCode').css('height','20px');
			$('#nowCode').css('background','yellow');

			$('#nowCode').text(randomCode(6))
			

		})


// 判断如果全部条件满足 则跳转页面
	$('#regestNow').on('click',function(){

		if($('#yonghuming').val()==''){
			$('#yonghumingTips').css('display','block');
		
		}else if($('#password').val()==''){

		$('#passwordTips').css('display','block');
		}else if($('#ensurePassword').val()==''){
			$('#ensurePasswordTips').css('display','block');
		}else if($('#Email').val()==''){
			$('#EmailTips').css('display','block');
		}else if($('#codeNow').val()==''){
			$('#codeNowTips').css('display','block');
			}
		//用户名
		if($('#yonghuming').val().length<4){
			return false;
		}else if($('#yonghuming').val().length>=4 && !regUsername.test($('#yonghuming').val())){
			return false;
		}else if($('#yonghuming').val()==''){
			return false;
		}

		//密码
		else if(/^[\d]*$/.test($('#password').val())){
			return false;
		}
		else if(/^[a-zA-Z]*$/.test($('#password').val())){
			return false;
		}
		else if(!/^(\d|[a-zA-Z])*((\d[a-zA-Z])|([a-zA-Z]\d))(\d|[a-zA-Z])*$/.test($('#password').val())){
			return false;
		}else if($('#password').val().length<6){
			return false;
		}
		//确认密码：
		if($('#ensurePassword').val()==''){
			return false;

		}
		else if($('#password').val()!=$('#ensurePassword').val()){
			return false;

		}
		//邮箱
		if(!regEmail.test($('#Email').val())){
			return false;

		}


	
		//验证码
		if($('#codeNow').val()==''){
			return false;

		}
		else if($('#codeNow').val()!=$('#nowCode').text()){
			return false;

		}
		else if($('#checkbox').prop('checked')){


			$('.last_td').on('click','a',function(){

			$.ajax({
                type: "get",
                url: "../api/regest.php",
                async: true,
                data:`username=${$('#yonghuming').val()}&password=${$('#password').val()}`,
                success: function(str){
                    var res=str;
                    if(res==='success'){
                        alert('注册成功')
                        location.href='../index.html'
                        // Cookie.set('name',JSON.stringify(_username),{path:'/' });
                    }else{
                        alert('您已经注册了')
                        $('#yonghuming').val('');
                        $('#yonghuming').focus();
                    }
                }
            })


})

		
		}
		

	})

	
	// 注册
		
				
			
	

		
})

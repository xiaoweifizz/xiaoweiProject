$(function(){
	var myUsername = $('#username_input').text();
	var myPassword = $('#password_input').text();

	$('#btn_login').on('click',function(){
		$.ajax({
        type: "get",
        url: "../api/login.php",
        async: true,
        data: {
        	'username':myUsername,
        	'password':myPassword
        },
        success: function(res){
        	console.log(res)
            if(res == 'success'){
						location.href = '../index.html';
					}else{
						alert('用户名或密码错误');
						
					}



		}
			})
	})
	


})
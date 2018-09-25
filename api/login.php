<?php

	//建立与数据库的连接
	include 'connect.php';

	//接受前段请求的参数
	$username = isset($_GET['username']) ? $_GET['username'] : null;
	$password = isset($_GET['password']) ? $_GET['password'] : null;



	$password = md5($password);

	
	$sql = "select * from user where username='$username' and password='$password'";

   $result = $conn->query($sql);

	// 可以查询到数据，说明用户名密码正确
	if($result->num_rows>0){
		echo "success";
	}else{
		echo "fail";
	}


?>
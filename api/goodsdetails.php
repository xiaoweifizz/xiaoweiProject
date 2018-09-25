<?php

	//建立与数据库的连接
	include 'connect.php';

	//接受前段请求的参数
	$id = isset($_GET['id']) ? $_GET['id'] : null;

	$sql = "select * from goodslist where id = '$id'";

    $result = $conn->query($sql);

    // var_dump($result);
    $row = $result->fetch_all(MYSQLI_ASSOC);

    // var_dump($row);

   
    
   	echo json_encode($row,JSON_UNESCAPED_UNICODE);

 $result->close();


    $conn->close();



?>
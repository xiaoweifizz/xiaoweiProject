<?php

	//建立与数据库的连接
	include 'connect.php';

	$sql = "select * from goodslist";

    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    // var_dump($row);

    $result->close();


    $conn->close();

    
   	echo json_encode($row,JSON_UNESCAPED_UNICODE);




?>
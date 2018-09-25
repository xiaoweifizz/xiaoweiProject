<?php
// 接收数据库的数据
include 'connect.php';


// 接收前端传过来的数据  id
$id = isset($_GET['id']) ? $_GET['id'] : null;
$qty= isset($_GET['num']) ? $_GET['num'] : null;

echo "$qty";

// 访问跟传过来的id一样的购物车数据库商品
$sql="select num from buycar where id = '$id'";

if($id!=null){
    // 执行语句
    $result = $conn->query($sql);
    if($result->num_rows>0){//购物车有该商品时
        // 获取该商品的数量
        $n=$result->fetch_all(MYSQLI_ASSOC)[0];
        $num = $n['num'];
        
        
        if($qty!=null){
            $num+=$qty;
        }else{
            $num++;
        };

        
        $sqll = "UPDATE buycar SET num = '$num' WHERE id = '$id'";
        $a = $conn->query($sqll);

        if($a){
           echo "yes"; 
        }
    }else{//没有的
        //查询商品所有信息
        $goodsSql = "SELECT * FROM goodslist WHERE id = '$id'";
        
        $goodsRes = $conn->query($goodsSql);
        $goodsInfo = $goodsRes->fetch_all(MYSQLI_ASSOC)[0];
        var_dump($goodsInfo);
        $guid = $goodsInfo['id'];
        $imgurl = $goodsInfo['imgurl'];
        $title = $goodsInfo['title'];
        $price = $goodsInfo['price'];
        $comment = $goodsInfo['commentCount'];
        $star = $goodsInfo['star'];
        //信息写入car表
        if($qty>1){
            $carSql = "insert into buycar (id,imgurl,title,price,commentCount,star,num) values ('$guid','$imgurl','$title','$price','$comment','$star',$qty)";
        $carRes = $conn->query($carSql);

        }

        $carSql = "insert into buycar (id,imgurl,title,price,commentCount,star,num) values ('$guid','$imgurl','$title','$price','$comment','$star',1)";
        $carRes = $conn->query($carSql);
        
        
    }



}



?>
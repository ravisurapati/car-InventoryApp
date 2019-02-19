<?php
 header("Access-Control-Allow-Origin: *");
    include 'class.user.php';
	$db = new USER();
// Get the posted data.
    $request=file_get_contents('php://input');
	$data = json_decode($request);

	$name=$data->name;
	//$name='ravi';
	
	if(!$data == ''){
	 $sql = "INSERT INTO `manufacturer`(`ManufactureName`) VALUES ('$name')";
	 $stmt = $db->runQuery($sql);
	$stmt->execute();
	// echo $sql;
	echo json_encode('manufacturer added successfully..!!');
	
	}else{
		echo json_encode('error');
	}
	
?>

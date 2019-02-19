<?php
	header("Access-Control-Allow-Origin: *");
	include 'class.user.php';
	//$collegeid = $_SESSION['collegeid'];

	$db = new USER();
	//$dash_home=new DASH();
	// Get the posted data.
	
	$sql = "SELECT * FROM `manufacturer`";
	$stmt = $db->runQuery($sql);
	$stmt->execute(); 
	while($row = $stmt->fetch(PDO::FETCH_ASSOC)){ 
	$cars[]=$row;
	}
	echo json_encode($cars);
	

?>

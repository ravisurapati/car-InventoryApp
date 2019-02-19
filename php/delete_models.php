<?php
	header("Access-Control-Allow-Origin: *");
	include 'class.user.php';
	//$collegeid = $_SESSION['collegeid'];

	$db = new USER();
	//$dash_home=new DASH();
	// Get the posted data.
	    $request=file_get_contents('php://input');
	$data = json_decode($request);
	$mid=$data->mid;	
  if(!$data == ''){
	$q=$data->q;

    if($q == 1){
		// Doctor reports in supervisorview
		$mid=$data->mid;		
	    $sql = "DELETE  FROM `model` WHERE `ModelID` = '$mid'";
		$stmt = $db->runQuery($sql);
		$stmt->execute();
		
       echo json_encode("Successfully DELETED.");
	}
	
}else{
		echo json_encode('error');
	}

?>


<?php
 header("Access-Control-Allow-Origin: *");
    include 'class.user.php';
	$db = new USER();
// Get the posted data.
    $request=file_get_contents('php://input');
	$data = json_decode($request);

	$mid=$data->modelno;
	$modelname=$data->modelname;
	$color=$data->color;
	$year=$data->year;
	$registrationno=$data->registrationno;
	$description=$data->description;
	$fileids=$data->photo;
	//$name='ravi';
	
	if(!$data == ''){
	 $sql = "INSERT INTO `model`(`MafID`, `Modelname`, `Color`, `Year`, `RegistrationNo`, `Descripton`, `FileID`) 
	 VALUES('$mid','$modelname','$color','$year','$registrationno','$description','$fileids') ";
	 $stmt = $db->runQuery($sql);
	$stmt->execute();
	// echo $sql;
	echo json_encode('manufacturer added successfully..!!');
	
	
	
	}else{
		echo json_encode('error');
	}
	
?>

<?php  
header("Access-Control-Allow-Origin: *");
	require_once 'constants.php';
	include 'class.user.php';
    $user_home = new USER();
	
	$file= basename($_FILES['fileToUpload']['name']);
	//$file="5-1-15.jpg";
	 //echo $file= '5b3546677c0140.52919308-29-06-2018-03:16:45-AM.jpg';
	$file_path = 'uploads';
	//$url =$uploads_dir."/".$file;
	$file_path = $file_path ."/".$file;
	//json_encode($file_path);
	if(move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $file_path)){
	   $res=$file_path;
	   $data['filename']=$res;
	   echo json_encode($data);
	   
	}else{
	    $res="fail";
	    echo json_encode($res);
			
	}

 ?>
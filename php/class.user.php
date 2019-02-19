<?php
require_once 'constants.php';
require_once 'dbconfig.php';

class USER
{	
	private $conn;
	
	public function __construct(){	
		$database = new Database();
		$db = $database->dbConnection();
		$this->conn = $db;
    }
	public function runQuery($sql){
		$stmt = $this->conn->prepare($sql);
		return $stmt;
	}
	public function lasdID(){
		$stmt = $this->conn->lastInsertId();
		return $stmt;
	}
}
?>
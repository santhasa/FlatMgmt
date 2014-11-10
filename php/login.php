<?php

$server = "localhost";
$username = "root";
$dbpassword = "root";
$database = "vicinity";

$wrng_pwd="Wrong Password";
$invalid_email="E-mail does not exist";
$email = $_POST["email"];
$pwd = $_POST["password"];
//$email = "sankar@tickingminds.com";
//$pwd = "sankar";
$db0 = new PDO("mysql:host=$server;dbname=$database;charset=utf8", $username, $dbpassword);
$sql = 'select * from member_credentials where member_id="'.$email.'"';
//echo $sql;
$stmt0 =$db0->query($sql);
$count=0;
while($row0 = $stmt0->fetch(PDO::FETCH_ASSOC)) {
	$count++;
	$extracted_password = "{$row0['member_pwd']}";
	$role="{$row0['role_id']}";
}
if ($count>0) {
	if ($extracted_password==$pwd) {
		echo json_encode($role);
	}
	else {
		echo json_encode($wrng_pwd);
	}
}
else {
	echo json_encode($invalid_email);
}
?>
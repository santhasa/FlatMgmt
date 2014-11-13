<?php
header("Access-Control-Allow-Origin:*");
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
$sql = 'select * from member_credentials where member_email="'.$email.'"';
//echo $sql;
$stmt0 =$db0->query($sql);
$count=0;
while($row0 = $stmt0->fetch(PDO::FETCH_ASSOC)) {
	$count++;
	$extracted_password = "{$row0['member_pwd']}";
	$role="{$row0['role_id']}";
	$member_id="{$row0['member_id']}";
}
if ($count>0) {
	if ($extracted_password==$pwd) {
		session_start();
		if (isset($_SESSION['username'])) {
			unset($_SESSION['username']);
			session_destroy();
		}
		$_SESSION['member_email']=$email;
		$_SESSION['member_role']=$role;
		$_SESSION['member_id']=$member_id;
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
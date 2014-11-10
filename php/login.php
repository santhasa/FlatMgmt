<?php

$server = "localhost";
$username = "root";
$password = "root";
$database = "vicinity";

$email = $_POST["email"];
$password = $_POST["password"];

$db0 = new PDO("mysql:host=$server;dbname=$database;charset=utf8", $username, $password);
$sql = 'select * from member_credentials where email="'.$email.'"';
$stmt0 =$db0->query($sql);
$count=0;
while($row0 = $stmt0->fetch(PDO::FETCH_ASSOC)) {
	$count++;
	$password = "{$row0['member_pwd']}";
	$role="{row0['role_id']}";
}
if ($count>0) {
	echo json_encode($role);
}
else {
	echo json_encode("login failed");
}
?>
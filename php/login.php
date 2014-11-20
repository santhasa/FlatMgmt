<?php
header("Access-Control-Allow-Origin:*");
require("vicinity_db_connection.php");
$wrng_pwd="Wrong Password";
$invalid_email="E-mail does not exist";
$email = $_POST["email"];
$pwd = $_POST["password"];
$platform=$_POST["platform"];
//$email = "sankar@tickingminds.com";
//$pwd = "sankar";
//$platform="Mac";

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
		//session_start();
		//$_SESSION['member_email']=$email;
		//$_SESSION['member_role']=$role;
		//$_SESSION['memberid']=$member_id;
		//echo json_encode($_SESSION['memberid']);
		//Insert values into session table
		//$apartment_id=1;
		date_default_timezone_set('Asia/Kolkata');
		$date=strtotime("now");	
		//echo $date;
		$auth_token=hash('ripemd160', $email.$member_id.time());
		$pagename="login";
		$sql_insert_session_table='insert into session(session_user_email,platform,session_user_id,session_role_id,auth_token,dtm,session_page_name) values
		("'.$email.'","'.$platform.'","'.$member_id.'","'.$role.'","'.$auth_token.'","'.$date.'","'.$pagename.'")';
		//echo $sql_insert_session_table;
		$stmt1=$db0->query($sql_insert_session_table);
		echo json_encode(array('role'=>$role,'auth_token'=>$auth_token,'platform'=>$platform));
	}
	else {
		echo json_encode(array('role'=>$wrng_pwd,'auth_token'=>'none','platform'=>$platform));
	}
}
else {
	echo json_encode(array('role'=>$invalid_email,'auth_roken'=>'none','platform'=>$platform));
}
?>
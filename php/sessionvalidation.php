<?php
	header("Access-Control-Allow-Origin:*");
	require("vicinity_db_connection.php");
	date_default_timezone_set('Asia/Kolkata');
	$pagename=$_GET['page'];
	$auth_token=$_GET['auth_token'];
	$platform=$_GET['platform'];
	//$platform="Win";
	//$auth_token='0a89664c2e80fb9a5f66a0da79c26983b334b228';
	//$pagename="dashboard";
	if ($pagename!="logoff") {
		$sql_query_get_session='select sno,dtm,session_user_email,session_user_id,session_role_id from session where auth_token="'.$auth_token.'" and platform="'.$platform.'" order by dtm desc LIMIT 1';
		//echo $sql_query_get_session;
		$stmt0=$db0->query($sql_query_get_session);
		$count=0;
		while($row0=$stmt0->fetch(PDO::FETCH_ASSOC)) {
			$count++;
			$dtm_old="{$row0['dtm']}";
			$sno="{$row0['sno']}";
			$email="{$row0['session_user_email']}";
			$member_id="{$row0['session_user_id']}";
			$role="{$row0['session_role_id']}";
		}	
		if ($count!=0) {
			$date=strtotime("now");
			$difference=$date-$dtm_old;
			//echo $difference;
			//echo "<br>";
			//echo ($difference <=300 || ($platform!='Mac' || $platform!="Win"));
			if ($difference <=300 || ($platform!='Mac' || $platform!="Win")) {
				$sql_insert_session_table='insert into session(session_user_email,platform,session_user_id,session_role_id,auth_token,dtm,session_page_name) values
				("'.$email.'","'.$platform.'","'.$member_id.'","'.$role.'","'.$auth_token.'","'.$date.'","'.$pagename.'")';
				$stmt1=$db0->query($sql_insert_session_table);
				echo json_encode(array('sno'=>$sno,'error'=>'none'));
			}
			else {
				$sql_delete_session='delete from session where auth_token="'.$auth_token.'"';
				$stmt2=$db0->query($sql_delete_session);
				echo json_encode(array('sno'=>'none','error'=>'sessionExpired'));
			}
		}
		else {
			echo json_encode(array('sno'=>'none','error'=>'sessionExpired'));
		}
	}
	else {
			$sql_delete_session='delete from session where auth_token="'.$auth_token.'"';
			$stmt2=$db0->query($sql_delete_session);
			echo json_encode(array('sno'=>'none','error'=>'sessionExpired'));
	}
?>
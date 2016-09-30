<?php
	require_once("../lib/func.php");

	if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['message'])){
	
		if(send_email($_POST['sendTo'], $_POST['subject'], $_POST['name'], $_POST['message'], $_POST['email'], 0))
			echo '{"response":{"error": "1", "message":"Email sent successfully!"}}';
		else{
			$err="Unable to complete the action you want. Try again.";
  		echo '{"response":{"error": "0", "message":"'. $err . '"}}';
  	}
	
	}
?>
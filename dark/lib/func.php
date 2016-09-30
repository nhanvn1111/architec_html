<?php

		function send_email($to, $subject, $msg, $e, $error){
		
		$headers = "From: " . $e . "\r\n";
		$headers .= "Reply-To: ". $e . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
		
		$m_header = "<html>
	<body>
		<div style='height:100px; margin:2px;'>
			<img src='http://paulomoreira.org/architec/img/logo.png' title='Architec Theme' style='float:left'/>
			<label style='float:left; padding: 45px 0 0 20px;color:#d6d6d6;font-size:12px;'>| &nbsp;&nbsp;Architecture Theme by DesignareTheme</label>
		</div>";
		
		$m_footer = "<div style='border-top: 1px solid #bababa; height:30px;margin-top:80px;'
		<b><label style='line-height:40px;color:#000000;font-size:12px;padding-left:3px;'><b>Architec Team<b></label></b>
		</div></body></html>";
		
		if(mail($to, $subject, $m_header.$msg.$m_footer, $headers)){
			return true;
		} else {
			return false;
		}
	}
	
?>
<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'] . "\n\n Regards, " . "\n" . $name ;
	$sendTo = "emilsonbolano@gmail.com";
	$subject = "Portfolio Message";
	$headers = "From: " . $email . "\r\n";

	mail($sendTo, $subject, $message, $headers);	
	echo "Message Sent";
?>
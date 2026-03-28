<?php
// commented out as this lib requires php 5.5
/*
  require_once('./lib/recaptcha/src/autoload.php');
  $secret = "6Le5mRgUAAAAADYAIRLpA_SUBynUJggELesaga8n";
  $recaptcha = new \ReCaptcha\ReCaptcha($secret);
  $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);

	if(isset($_POST['submit']) && $resp->isSuccess()) {
*/
	if(isset($_POST['submit']) {

  	$to = "contact@harperalpine.com";
		$subject = "Harper Alpine Enquiry";
		$name_field = $_POST['name'];
		$email_field = $_POST['email'];
		$message = $_POST['message'];
		$headers = "From: $email_field" . "\r\n" .
    "Reply-To: $email_field" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

		$body = "From: $name_field\nMessage:\n$message";


		//echo "Data has been submitted to $to!";
		mail($to, $subject, $body, $headers);

		header( 'Location: http://harperalpine.com/sent' ) ;

	} else {

  	exit("The message could not be sent.<br/><a href='contact'>Go back</a>");

	}
?>

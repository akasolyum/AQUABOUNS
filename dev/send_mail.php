<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$myAwardSpaceEmail = "spam@aquabouns.fr";
$myAwardSpaceEmailPassword = "BJ*D47Am2Mz@H4";
$myPersonalEmail = "contact@aquabouns.fr";

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

    if(isset($_POST['submit'])) {

        $mail = new PHPMailer(true);
        $mail->SMTPDebug = 0;

        $mail->isSMTP(); 
        $mail->Host = 'smtp.aquabouns.fr';
        $mail->SMTPAuth = true;
        $mail->Username = $myAwardSpaceEmail;
        $mail->Password = $myAwardSpaceEmailPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom($myAwardSpaceEmail, 'Nous');
        $mail->addAddress($myPersonalEmail);
        $mail->addReplyTo($_POST['email'], $_POST['name']);

        $mail->isHTML(true);    
        $mail->Subject = $_POST['subject'];
        $mail->Body = $_POST['message'];

        try {
            $mail->send();
            echo 'Your message was sent successfully!';
        } catch (Exception $e) {
            echo "Your message could not be sent! PHPMailer Error: {$mail->ErrorInfo}";
        }
        
    } else {
        echo "There is a problem with the contact.html document!";
    }
    
?>
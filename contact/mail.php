<?php 

if (isset($_POST['submit'])) {
    $to = "fluffy@localhost";
    $subject = wordwrap($_POST['subject'], 70);
    $body = $_POST['body'];

    mail($to, $subject, $body);
    
}
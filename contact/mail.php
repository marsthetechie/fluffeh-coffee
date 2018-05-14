<?php 

if (isset($_POST['submit'])) {
    $to = "emailhere";
    $subject = wordwrap($_POST['subject'], 70);
    $body = $_POST['body'];
    $header = $_POST['email'];

    mail($to, $subject, $body, $header);
}
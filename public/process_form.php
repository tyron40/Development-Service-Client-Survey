<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $emailSubject = "Survey Form Submission";
    $recipient = "ttechsupport@tyrotech.dev"; // Your email address
    $message = "";

    foreach ($_POST as $key => $value) {
        $message .= $key . ": " . $value . "\n";
    }

    $headers = "From: webmaster@example.com"; // Change this to your email address
    mail($recipient, $emailSubject, $message, $headers);
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "kontakt@example.com";
    $subject = "Nowa wiadomość od $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $mail_body = "Imię i nazwisko: $name\n";
    $mail_body .= "Email: $email\n";
    $mail_body .= "Telefon: $phone\n";
    $mail_body .= "Wiadomość:\n$message";

    mail($to, $subject, $mail_body, $headers);

    header("Location: /kontakt.html?message=success");
    exit();
}
?>
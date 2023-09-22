<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Adjust the path if necessary

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['your-name'];
    $phone = $_POST['your-phone'];
    $email = $_POST['your-email'];
    $subject = $_POST['your-subject'];
    $message = $_POST['your-message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Set up SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'developerappsamd@gmail.com';
        $mail->Password = 'sbnvtgdkpgriyobq';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Set up sender and recipient
        $mail->setFrom('developerappsamd@gmail.com', 'Sender Name'); // Replace with your email and name
        $mail->addAddress('anhijou.1@gmail.com', 'Recipient Name'); // Replace with the recipient's email and name

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "<p>Name: $name</p><p>Phone: $phone</p><p>Email: $email</p><p>Message: $message</p>";

        // Send the email
        $mail->send();
        
        // Redirect to #contacts using JavaScript
        echo '<script>window.location.href = "../#contacts";</script>';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>

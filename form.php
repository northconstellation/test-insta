<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>


<?php
if(!empty($_POST['name'] )&& !empty($_POST['emeil']))
{
    $emeil = $_POST['emeil'];
    $to = "mail@cybertraff.com";
    $from = 'mail@cybertraff.com';
    $subject = "Заяка с сайта cybertraff.com";
    $message = "Имя: " . $_POST['name'] . '<br/>';
    $message .= "Телефон: " . $_POST['company'] . '<br/>';
    $message .= "E-mail: " . $_POST['emeil'] . '<br/>';
    $message .= "Телефон: " . $_POST['telephone'] . '<br/>';
    $message .= "Skype: " . $_POST['skype'] . '<br/>';
    $message .= "Детали: " . $_POST['detail'] . '<br/>';

    mail($toEmail, $subject, $body, $headers);

    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: mail@cybertraff.com\r\n";
    $result = mail($to, $subject, $message, $headers);

    if ($result){ 
        echo "<p>Данные успешно отправленно.</p>";
    }
    else{
        echo "<p>Данные не отправлены. Попробуйте еще раз.</p>";
    }
}
else {
echo "<p>Обязательные поля не заполнены. Попробуйте еще раз.</p>";
}
?>

</body>
</html>
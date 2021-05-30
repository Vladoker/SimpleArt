<?php

header('Access-Control-Allow-Headers: X-Requested-With,Origin,Content-Type,Cookie,Accept');


if($_SERVER['REQUEST_METHOD'] === 'POST'){

$data = json_decode(file_get_contents('php://input'));

if($data === null) {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode([
        'errorMessage' => 'Please provide valid JSON',
    ]);
    die;
}



$message = "Name: $data->name\nEmail: $data->email\Message: $data->message\n";

$message = wordwrap($message, 70, "\r\n");

$headers = 'From: simple-art.md' . "\r\n" .
    'Reply-To: simple-art.md' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail("tm_vladislav@mail.ru", "Order", $message , $headers);

echo 1; die;
}
else {
    header('HTTP/1.1 204 No Content');
    die;
}


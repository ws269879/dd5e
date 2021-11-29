<?php
require_once(__DIR__.'/includes/db.php');
require_once(__DIR__.'/includes/reponse.php');

$httpResponse = new HTTPResponse();
$myDb = new DBConnection();

if (!isset($_POST["password"]) || !isset($_POST["email"])) {
    $httpResponse->setStatusCode(400);
    $httpResponse->setContent('Expected email, password');
    $httpResponse->fullResponse();
}

$password = $_POST["password"];
$email = $_POST["email"];

$salt = getenv('SALT');
$pepper = getenv('PEPPER');
$pass = $salt.$password.$pepper;
$dbResponse = $myDb->fetch("SELECT `users`.`password` FROM `users` WHERE `email` = ?", array($email));

if ($dbResponse === false) {
    $httpResponse->setStatusCode(404);
    $httpResponse->fullResponse();
}

if (!password_verify($pass, $dbResponse['password'])) {
    $httpResponse->setStatusCode(404);
    $httpResponse->fullResponse();
}

$now = new DateTime();
$token = password_hash(getenv('TOKEN').$email.$now->format('Y-m-d H:i:s'), PASSWORD_BCRYPT);
$myDb->insert(
    "INSERT INTO `auth` (`token`, `email`, `createdAt`, `refreshedAt`, `expiryInMins`) VALUES (?, ?, current_timestamp(), current_timestamp(), '60');",
    array($token, $email)
);
setcookie('auth', $token);
$httpResponse->setStatusCode(200);
$httpResponse->setContent('');
$httpResponse->fullResponse();
<?php
require_once(__DIR__.'/includes/db.php');
require_once(__DIR__.'/includes/reponse.php');
require_once(__DIR__.'/includes/utils.php');
require_once(__DIR__.'/includes/dot-env.php');

allowOptions();

$httpResponse = new HTTPResponse();
$envsSet = setMyEnv();
if (!$envsSet) {
    $httpResponse->setStatusCode(500);
    $httpResponse->setContent('ENVS');
    $httpResponse->fullResponse();
}

$myDb = new DBConnection();

if (!correctRequestType('POST')) {
    $httpResponse->setStatusCode(405);
    $httpResponse->setContent('Expected POST');
    $httpResponse->fullResponse();
}

if (!isset($_POST["password"]) || !isset($_POST["email"])) {
    $httpResponse->setStatusCode(400);
    $httpResponse->setContent('Expected email, password');
    $httpResponse->fullResponse();
}

$password = $_POST["password"];
$email = $_POST["email"];

$salt = getenv('SALT', true);
$pepper = getenv('PEPPER', true);
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
$httpResponse->setContent('success');
$httpResponse->fullResponse();
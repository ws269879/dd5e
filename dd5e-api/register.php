<?php
require_once(__DIR__.'/includes/db.php');
require_once(__DIR__.'/includes/reponse.php');

$httpResponse = new HTTPResponse();

if (!isset($_POST["password"]) || !isset($_POST["email"]) || !isset($_POST["firstname"]) || !isset($_POST["lastname"])) {
    $httpResponse->setStatusCode(400);
    $httpResponse->setContent('Expected email, password, firstname, lastname');
    $httpResponse->fullResponse();
}

$password = $_POST["password"];
$email = $_POST["email"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];

$myDb = new DBConnection();

$salt = getenv('SALT');
$pepper = getenv('PEPPER');
$pass = password_hash($salt.$password.$pepper, PASSWORD_BCRYPT);
$dbResponse = $myDb->insert(
    "INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `createdAt`, `updatedAt`) VALUES (NULL, ?, ?, ?, ?, current_timestamp(), current_timestamp());",
    array($email, $pass, $firstname, $lastname)
);

if ($dbResponse === true) {
    $httpResponse->setStatusCode(200);
    $httpResponse->setContent($dbResponse);
    $httpResponse->fullResponse();
} else if ($dbResponse === '23000') {
    $httpResponse->setStatusCode(409);
    $httpResponse->setContent('Account already exists with that email');
    $httpResponse->fullResponse();
} else {
    $httpResponse->setStatusCode(500);
    $httpResponse->fullResponse();
}

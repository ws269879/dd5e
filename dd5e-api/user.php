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

authMiddleware($myDb);

if (!correctRequestType('DELETE')) {
    $httpResponse->setStatusCode(405);
    $httpResponse->setContent('Expected DELETE');
    $httpResponse->fullResponse();
}

// Load post data from JSON body
$_POST = json_decode(file_get_contents("php://input"), true);

if (!isset($_POST["email"])) {
    $httpResponse->setStatusCode(400);
    $httpResponse->setContent('Expected email');
    $httpResponse->fullResponse();
}

$email = $_POST['email'];

// Get all users from the DB
$dbResponse = $myDb->fetchMultiple(
    "DELETE FROM `users` WHERE `users`.`email` = ?;",
    array($email)
);

if ($dbResponse === false) {
    // Catch any extra errors
    $httpResponse->setStatusCode(500);
    $httpResponse->fullResponse();
} else {
    // If user added successfully
    $httpResponse->setStatusCode(200);
    $httpResponse->setContent($dbResponse);
    $httpResponse->fullResponse();
}

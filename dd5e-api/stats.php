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

if (!correctRequestType('GET')) {
    $httpResponse->setStatusCode(405);
    $httpResponse->setContent('Expected GET');
    $httpResponse->fullResponse();
}
// "SELECT `users`.`firstName`, `users`.`lastName`, `users`.`email`, `users`.`role` FROM `users`;",

// Get all users from the DB
$dbResponse = $myDb->fetchMultiple("SELECT * FROM `stats`;");

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

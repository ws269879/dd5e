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

if (!correctRequestType('GET')) {
    $httpResponse->setStatusCode(405);
    $httpResponse->setContent('Expected GET');
    $httpResponse->fullResponse();
}

// Check auth
$user = authMiddleware($myDb);

// Get user from DB
$dbResponse = $myDb->fetchOne("SELECT `users`.`firstName`, `users`.`lastName`, `users`.`email`, `users`.`role` FROM `users` WHERE `email` = ?", array($user->getEmail()));

// If not user found return 'not found' error code
if ($dbResponse === false) {
    $httpResponse->setStatusCode(404);
    $httpResponse->fullResponse();
}

// Response
$httpResponse->setStatusCode(200);
// Body of response
$httpResponse->setContent(array(
    'firstName'=>$dbResponse['firstName'], 
    'lastName'=>$dbResponse['lastName'], 
    'email'=>$dbResponse['email'],
    'role'=>$dbResponse['role']
));
$httpResponse->fullResponse();
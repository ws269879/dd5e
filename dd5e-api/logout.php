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

$user = authMiddleware($myDb);
// Clear session cookie auth
setcookie('auth', '',  time() - 3600);

// Response
$httpResponse->setStatusCode(200);
$httpResponse->setContent('success');
$httpResponse->fullResponse();
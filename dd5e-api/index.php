<?php
require_once(__DIR__.'/includes/reponse.php');
require_once(__DIR__.'/includes/utils.php');
require_once(__DIR__.'/includes/dot-env.php');

allowOptions();

// Set environment variables
setMyEnv();

$httpResponse = new HTTPResponse();

$httpResponse->setStatusCode(200);
// Display project settings at api root
$httpResponse->setContent(array(
    'project'=>'dd5e-api-project',
    'createdBy'=>'ws269879',
    'php'=>phpversion()
));
$httpResponse->fullResponse();
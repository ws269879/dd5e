<?php
require_once(__DIR__.'/includes/reponse.php');
require_once(__DIR__.'/includes/utils.php');
require_once(__DIR__.'/includes/dot-env.php');
setMyEnv();


$httpResponse = new HTTPResponse();

$httpResponse->setStatusCode(200);
$salt = getenv('SALT', true);
$pepper = getenv('PEPPER', true);
$host = getenv('DB_HOST');
$name = getenv('DB_NAME');
$username = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD');
$httpResponse->setContent(json_encode(array(
    'project'=>'dd5e-api-project',
    'createdBy'=>'ws269879',
    'php'=>phpversion()
)), JSON_FORCE_OBJECT);
$httpResponse->fullResponse();
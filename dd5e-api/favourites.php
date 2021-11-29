<?php
require_once(__DIR__.'/includes/db.php');
require_once(__DIR__.'/includes/reponse.php');
require_once(__DIR__.'/includes/utils.php');

$httpResponse = new HTTPResponse();
$myDb = new DBConnection();

if (!correctRequestType('GET')) {
    $httpResponse->setStatusCode(405);
    $httpResponse->setContent('Expected GET');
    $httpResponse->fullResponse();
}

if (!isset($_POST["password"]) || !isset($_POST["email"])) {
    $httpResponse->setStatusCode(400);
    $httpResponse->setContent('Expected email, password');
    $httpResponse->fullResponse();
}

$user = authMiddleware($myDb);

$favs = $myDb->fetchAll(
    'SELECT `favourites`.`item`, `favourites`.`type` FROM `favourites` WHERE `email` LIKE ?;',
    array($user->getEmail())
);


if ($favs === false) {
    $httpResponse->setStatusCode(404);
    $httpResponse->fullResponse();
}

$httpResponse->setStatusCode(200);
$httpResponse->setContent(json_encode($favs));
$httpResponse->fullResponse();

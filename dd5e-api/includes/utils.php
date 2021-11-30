<?php 
include_once(__DIR__.'/user.php');
require_once(__DIR__.'/db.php');
require_once(__DIR__.'/reponse.php');

function allowOptions() {

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');   
    
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");
        
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
        exit(0);
    }
}

function authMiddleware(DBConnection $dbConnection): User {
    $httpResponse = new HTTPResponse();
    if (!isset($_COOKIE['auth'])) {
        $httpResponse->setStatusCode(401);
        $httpResponse->fullResponse();
    }
    $valid = validToken($dbConnection, $_COOKIE['auth']);
    if ($valid === null) {
        $httpResponse->setStatusCode(401);
        unset($_COOKIE['auth']);
        $httpResponse->fullResponse();
    }
    return $valid;
}

function validToken(DBConnection $dbConnection, ?string $token): ?User {
    if ($token === null) {
        return null;
    }

    $auth = $dbConnection->fetch('SELECT `auth`.`email`, `auth`.`refreshedAt`, `auth`.`expiryInMins` FROM `auth` WHERE `token` LIKE ?', array($token));

    if ($auth === false) {
        return null;
    }
    $created = new DateTime($auth['createdAt']);
    $expectedExpiry = new DateTime($auth['createdAt']);
    $expectedExpiry->modify("+{$auth['expiryInMins']} minutes");
    $diff = $expectedExpiry->getTimestamp() - $created->getTimestamp();

    if ($diff <= 0) {
        return null;
    }
    
    $dbConnection->insert('UPDATE `auth` SET `refreshedAt` = current_timestamp() WHERE `token` LIKE ?', array($token));
    $user = $dbConnection->fetch("SELECT `users`.`email`, `users`.`firstName`, `users`.`lastName` FROM `users` WHERE `email` = ?", array($auth['email']));
    return new User($user['firstName'], $user['lastName'], $user['email']);
}

function correctRequestType(string $expectedType) {
    return $_SERVER['REQUEST_METHOD'] === $expectedType;
}
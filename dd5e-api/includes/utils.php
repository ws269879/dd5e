<?php 
include_once(__DIR__.'/user.php');
require_once(__DIR__.'/includes/db.php');
require_once(__DIR__.'/includes/reponse.php');

function AuthMiddleware(DBConnection $dbConnection, ?string $token): ?User {
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
<?php 
include_once(__DIR__.'/user.php');
require_once(__DIR__.'/db.php');
require_once(__DIR__.'/reponse.php');

// Allows Options requests, without angular app will assume all calls are impossible
function allowOptions() {

    
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

// Only give user if logged in
function optionalAuthMiddleware(DBConnection $dbConnection): User {
    if (!isset($_COOKIE['auth'])) {
        return null;
    }
    $valid = validToken($dbConnection, $_COOKIE['auth']);
    return $valid;
}

// Middleware to prevent unauthorised access
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

// Validate our token and return a User instance
function validToken(DBConnection $dbConnection, ?string $token): ?User {
    // Return null if no token is found
    if ($token === null) {
        return null;
    }

    $auth = $dbConnection->fetchOne('SELECT `auth`.`email`, `auth`.`refreshedAt`, `auth`.`expiryInMins` FROM `auth` WHERE `token` LIKE ?', array($token));

    // Return null if no auth entry found for token
    if ($auth === false) {
        return null;
    }
    
    // Set default time zone due to issues around server trying to use different timezone by default to the DB
    date_default_timezone_set('UTC');
    // Check expired time of auth cookie
    $now = new DateTime();
    $expectedExpiry = new DateTime($auth['refreshedAt']);
    $expectedExpiry->modify("+{$auth['expiryInMins']} minutes");
    $diff = $expectedExpiry->getTimestamp() - $now->getTimestamp();

    // Return null if token has expired
    if ($diff <= 0) {
        return null;
    }
    
    // Refresh token to give it another hour of life
    $dbConnection->run('UPDATE `auth` SET `refreshedAt` = current_timestamp() WHERE `token` LIKE ?', array($token));
    $user = $dbConnection->fetchOne("SELECT `users`.`email`, `users`.`firstName`, `users`.`lastName`, `users`.`role` FROM `users` WHERE `email` = ?", array($auth['email']));
    return new User($user['firstName'], $user['lastName'], $user['email'], $user['role'] === 'admin');
}

// Check request method is the one exprected
function correctRequestType(string $expectedType) {
    return $_SERVER['REQUEST_METHOD'] === $expectedType;
}
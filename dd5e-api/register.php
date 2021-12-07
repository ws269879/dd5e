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

if (!correctRequestType('POST')) {
    $httpResponse->setStatusCode(405);
    $httpResponse->setContent('Expected POST');
    $httpResponse->fullResponse();
}

$user = optionalAuthMiddleware($myDb);

// Load post data from JSON body
$_POST = json_decode(file_get_contents("php://input"), true);

if (!isset($_POST["password"]) || !isset($_POST["email"]) || !isset($_POST["firstname"]) || !isset($_POST["lastname"])) {
    $httpResponse->setStatusCode(400);
    $httpResponse->setContent('Expected email, password, firstname, lastname');
    $httpResponse->fullResponse();
}

$role = 'user';
if (isset($_POST["role"])) {
    // Prevent if not admin creating user
    if ($_POST["role"] === 'admin' && $user !== null && $user->isAdmin()) {
        $role = 'admin';
    }
}

// Get values from post body
$password = $_POST["password"];
$email = $_POST["email"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];

// Salt and hash password before going to DB
$salt = getenv('SALT', true);
$pepper = getenv('PEPPER', true);
$pass = password_hash($salt.$password.$pepper, PASSWORD_BCRYPT);

// Store new user into database
$dbResponse = $myDb->run(
    "INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `role`, `createdAt`, `updatedAt`) VALUES (NULL, ?, ?, ?, ?, ?, current_timestamp(), current_timestamp());",
    array($email, $pass, $firstname, $lastname, $role)
);

if ($dbResponse === true) {
    // If user added successfully
    $httpResponse->setStatusCode(200);
    $httpResponse->setContent($dbResponse);
    $httpResponse->fullResponse();
} else if ($dbResponse === '23000') {
    // If entry with email exists
    $httpResponse->setStatusCode(409);
    $httpResponse->setContent('Account already exists with that email');
    $httpResponse->fullResponse();
} else {
    // Catch any extra errors
    $httpResponse->setStatusCode(500);
    $httpResponse->fullResponse();
}

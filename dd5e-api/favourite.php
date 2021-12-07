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

if (!correctRequestType('POST') && !correctRequestType('DELETE')) {
    $httpResponse->setStatusCode(405);
    $httpResponse->setContent('Expected POST or DELETE');
    $httpResponse->fullResponse();
}

// Load post data from JSON body
$_POST = json_decode(file_get_contents("php://input"), true);

if (!isset($_POST["item"]) || !isset($_POST["type"])) {
    $httpResponse->setStatusCode(400);
    $httpResponse->setContent('Expected item');
    $httpResponse->fullResponse();
}

$item = $_POST['item'];
$type = strtolower($_POST['type']);

$user = authMiddleware($myDb);

if (correctRequestType('POST')) {

    $validType = $myDb->fetchOne("SELECT * FROM `types` WHERE `type` LIKE ?;", array($type));

    $favs = $myDb->run(
        'INSERT INTO `favourites` (`item`, `email`, `type`) VALUES (?, ?, ?);',
        array($item, $user->getEmail(), $type)
    );


    if ($favs === false) {
        $httpResponse->setStatusCode(404);
        $httpResponse->fullResponse();
    } else if ($favs === '23000') {
        $httpResponse->setStatusCode(409);
        $httpResponse->setContent('Already assigned to user');
        $httpResponse->fullResponse();
    }

} else {

    $favs = $myDb->run(
        'DELETE FROM `favourites` WHERE `favourites`.`item` LIKE ? AND `favourites`.`email` LIKE ? AND `favourites.type` LIKE ?;' ,
        array($item, $user->getEmail(), $type)
    );


    if ($favs === false) {
        $httpResponse->setStatusCode(404);
        $httpResponse->fullResponse();
    }
}

$httpResponse->setStatusCode(200);
$httpResponse->fullResponse();
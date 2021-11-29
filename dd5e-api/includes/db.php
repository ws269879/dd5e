<?php
class DBConnection {
    private ?PDO $connection = null;
    private string $DB_HOST = "plesk.remote.ac";
    private string $DB_NAME = "WS269879_dd5e";
    private string $DB_USERNAME = "WS269879_dd5e";
    private string $DB_PASSWORD = "aDwv82%7";
    private string $DB_CHARSET = "utf8";
    private array $DB_OPTIONS = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    function __construct() {
        $dsn = "mysql:host=".$this->DB_HOST.";dbname=".$this->DB_NAME.";charset=".$this->DB_CHARSET;
        $this->connection = new PDO($dsn, $this->DB_USERNAME, $this->DB_PASSWORD, $this->DB_OPTIONS);
    }

    public function fetchAll(string $query, ?array $params = null) {
        if ($query === null) return null;
        $preparedQuery = $this->connection->prepare($query);
        $preparedQuery->execute($params);
        var_dump($preparedQuery);
        $response = $preparedQuery->fetchAll();
        return $response;
    }

    public function fetch(string $query, ?array $params = null) {
        if ($query === null) return null;
        $preparedQuery = $this->connection->prepare($query);
        if ($params !== null) {
            $preparedQuery->execute($params);
        }
        $response = $preparedQuery->fetch();
        return $response;
    }

    public function insert(string $query, ?array $params = null) {
        try {
            if ($query === null) return null;
            $preparedQuery = $this->connection->prepare($query);
            if ($params !== null) {
                $preparedQuery->execute($params);
            } else {
                $preparedQuery->execute();
            }
            return true;
        } catch (PDOException $err) {
            return $err->getCode();
        }
    }
}    
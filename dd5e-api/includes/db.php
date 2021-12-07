<?php
class DBConnection {
    private PDO $connection;
    private string $DB_HOST;
    private string $DB_NAME;
    private string $DB_USERNAME;
    private string $DB_PASSWORD;
    private string $DB_CHARSET = "utf8";

    // Database options
    private array $DB_OPTIONS = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    // Build my DB PDO from env variables
    function __construct() {
        $this->DB_HOST = getenv('DB_HOST');
        $this->DB_NAME = getenv('DB_NAME');
        $this->DB_USERNAME = getenv('DB_USERNAME');
        $this->DB_PASSWORD = getenv('DB_PASSWORD');
        $dsn = "mysql:host=".$this->DB_HOST.";dbname=".$this->DB_NAME.";charset=".$this->DB_CHARSET;
        $this->connection = new PDO($dsn, $this->DB_USERNAME, $this->DB_PASSWORD, $this->DB_OPTIONS);
    }

    // SQL request with mutiple row response
    public function fetchMultiple(string $query, ?array $params = null) {
        try {
            if ($query === null) return null;
            $preparedQuery = $this->connection->prepare($query);
            if ($params !== null) {
                $preparedQuery->execute($params);
            } else {
                $preparedQuery->execute();
            }
            $response = $preparedQuery->fetchAll();
            return $response;
        }  catch (PDOException $err) {
            var_dump($err);
            // Ensure we catch any DB issues
            return $err->getCode();
        }
    }

    // SQL request with a single response row
    public function fetchOne(string $query, ?array $params = null) {
        try {
            if ($query === null) return null;
            $preparedQuery = $this->connection->prepare($query);
            if ($params !== null) {
                $preparedQuery->execute($params);
            } else {
                $preparedQuery->execute();
            }
            $response = $preparedQuery->fetch();
            return $response;
        } catch (PDOException $err) {
            // Ensure we catch any DB issues
            return $err->getCode();
        }
    }

    // Run a SQL command without expecting a response row/rows
    public function run(string $query, ?array $params = null) {
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
            // Ensure we catch any DB issues
            return $err->getCode();
        }
    }
}    
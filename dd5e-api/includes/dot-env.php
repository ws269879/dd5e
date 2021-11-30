<?php

function setMyEnv(bool $secondTry = false): bool {
    if (getenv('DB_HOST') === null || getenv('DB_NAME') === null || getenv('DB_USERNAME') === null || getenv('DB_PASSWORD') === null || getenv('SALT') === null || getenv('PEPPER') === null || getenv('TOKEN') === null) {

        $path = __DIR__.'/.env';
        if (!is_readable($path)) {
            throw new \RuntimeException(sprintf('%s file is not readable', $path));
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {

            if (strpos(trim($line), '#') === 0) {
                continue;
            }

            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);

            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                putenv(sprintf('%s=%s', $name, $value));
                $_ENV[$name] = $value;
                $_SERVER[$name] = $value;
            }
        }

        if (getenv('DB_HOST') === null || getenv('DB_NAME') === null || getenv('DB_USERNAME') === null || getenv('DB_PASSWORD') === null || getenv('SALT') === null || getenv('PEPPER') === null || getenv('TOKEN') === null) { {

            if ($secondTry) {
                return false;
            } else {
                return setMyEnv(true);
            }
        }
    }
    return true;
}


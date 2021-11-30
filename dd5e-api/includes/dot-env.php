<?php

function setMyEnv(bool $secondTry = false): bool {
    if (getenv('DB_HOST', true) === false || getenv('DB_NAME', true) === false || getenv('DB_USERNAME', true) === false || getenv('DB_PASSWORD', true) === false || getenv('SALT', true) === false || getenv('PEPPER', true) === false || getenv('TOKEN', true) === false) {

        $path = __DIR__.'/.env';
        if (!is_readable($path)) {
            throw new \RuntimeException(sprintf('%s file is not readable', $path));
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        var_dump($lines);
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

        if (getenv('DB_HOST', true) === false || getenv('DB_NAME', true) === false || getenv('DB_USERNAME', true) === false || getenv('DB_PASSWORD', true) === false || getenv('SALT', true) === false || getenv('PEPPER', true) === false || getenv('TOKEN', true) === false) {

            if ($secondTry) {
                return false;
            } else {
                return setMyEnv(true);
            }
        }
    }
    return true;
}
<?php

// Load all environment variables from .env into system env
function setMyEnv(bool $secondTry = false): bool {
    // Check if they are not already set
    if (getenv('DB_HOST', true) === false || getenv('DB_NAME', true) === false || getenv('DB_USERNAME', true) === false || getenv('DB_PASSWORD', true) === false || getenv('SALT', true) === false || getenv('PEPPER', true) === false || getenv('TOKEN', true) === false) {

        // Find env file and check it is readable
        $path = __DIR__.'/.env';
        if (!is_readable($path)) {
            // Error if file missing or not readable
            throw new \RuntimeException(sprintf('%s file is not readable', $path));
        }

        // Read from file one line at a time
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {

            // Find hash at beginning string, if exists it's a comment and should be ignored
            if (strpos(trim($line), '#') === 0) {
                continue;
            }

            // Split at '=', put fist half as name and second half as value. Trim whitespace from values.
            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);

            // Set ENV values with key 'name' if not already set
            if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
                putenv(sprintf('%s=%s', $name, $value));
                $_ENV[$name] = $value;
                $_SERVER[$name] = $value;
            }
        }

        // Check again incase of any issues.
        if (getenv('DB_HOST', true) === false || getenv('DB_NAME', true) === false || getenv('DB_USERNAME', true) === false || getenv('DB_PASSWORD', true) === false || getenv('SALT', true) === false || getenv('PEPPER', true) === false || getenv('TOKEN', true) === false) {

            // Minor recurrsion to ensure envs are set
            if ($secondTry) {
                return false;
            } else {
                return setMyEnv(true);
            }
        }
    }
    return true;
}
<?php
class User {
    private string $firstName;
    private string $lastName;
    private string $email;

    function __construct(string $firstName, string $lastName, string $email) {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
    }

    function getFullName(): string {
        return $this->firstName.' '.$this->lastName;
    }

    function getFirstName(): string {
        return $this->firstName;
    }

    function getLastName(): string {
        return $this->lastName;
    }

    function getEmailName(): string {
        return $this->email;
    }
}
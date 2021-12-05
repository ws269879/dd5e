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

    public function getFullName(): string {
        return $this->firstName.' '.$this->lastName;
    }

    public function getFirstName(): string {
        return $this->firstName;
    }

    public function getLastName(): string {
        return $this->lastName;
    }

    public function getEmail(): string {
        return $this->email;
    }
}
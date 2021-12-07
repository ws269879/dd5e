<?php
class HTTPResponse {
    private int $code = 0;
    private $content;
    private $contentType = 'application/json';

    public function setStatusCode(int $code) {
        $this->code = $code;
    }

    // Set content value
    public function setContent($content) {
        $this->content = $content;
    }

    // Sets the content type of our response body
    public function setContentType(int $code) {
        $this->code = $code;
    }

    // Function to run at the end of our api route to end connection and send code
    public function fullResponse() {
        switch ($this->code) {
            case 200:
                header('Content-Type: '.$this->contentType);
                if ($this->content !== null) {
                    echo json_encode($this->content);
                }
                http_response_code(200);
                break;
            case 400:
                http_response_code(400);
                echo 'Missing parameters. ';
                if ($this->content !== null) {
                    echo $this->content;
                }
                break;
            case 404:
                http_response_code(404);
                echo 'Nothing found here';
                break;
            default: {
                if ($this->code >= 500) {
                    http_response_code(500);
                    echo 'Something went wrong';
                } else {
                    http_response_code($this->code);
                    if ($this->content !== null) {
                        echo $this->content;
                    }
                }
                break;
            }
        }
        die();
    }
}
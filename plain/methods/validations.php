<?php

    function return_status($pass, $msg) {
        if ($pass) {
            return true;
        }
        else {
            echo json_encode(
                [
                    'status' => 'fail',
                    'msg' => $msg
                ]
                );
        }
    }

    function is_date($date) {
        if (check_date($date)) {
            return_status(true);
        }
        else {
            return_status(false, 'Invalid date');
        }
    }

    function is_empty($value, $name) {
        if (!$value) {
            return_status(false, $name . ' is empty');
        }
        else {
            return_status(true);
        }
    }

?>
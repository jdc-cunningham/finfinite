<?php

    function return_status($pass, $msg = null) {
        if ($pass) {
            $status = 'ok';
        }
        else {
            $status = 'fail';
        }

        echo json_encode(
            [
                'status' => $status,
                'msg' => $msg
            ]
            );
        exit;
    }

    // function is_date($date) {
    //     if (checkdate($date)) { // expects 3 parameters
    //         return_status(true);
    //     }
    //     else {
    //         return_status(false, 'Invalid date');
    //     }
    // }

    function is_empty($value, $name) {
        if (!$value) {
            return_status(false, $name . ' is empty');
        }
        else {
            return $value;
        }
    }

?>
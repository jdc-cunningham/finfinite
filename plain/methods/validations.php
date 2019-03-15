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

    /* this is just a simple empty validation, I'm not doing any type checking
     * just for the sake of a simple, working back-end */
    function is_empty($value, $name) {
        if (!$value) {
            return_status(false, $name . ' is empty');
        }
        else {
            return $value;
        }
    }

?>
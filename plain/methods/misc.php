<?php

    function date_count_correct($date, $format) {
        if ($format == 'mm/dd/yyyy') {
            if (strpos($date, '/') !== false) {
                $date_parts = explode('/', $date);
                if (
                    strlen($date_parts[0]) == 2 &&
                    strlen($date_parts[1]) == 2 &&
                    strlen($date_parts[2]) == 4
                ) {
                    return $date;
                } else {
                    return false;
                }
            }
        }
    }

    function flip_date_mm_to_yy($date) {
        if (
            strpos($date, '/') !== false && 
            strlen($date) == 10 && 
            substr_count($date, '/') == 2 && 
            ctype_digit(str_replace('/', '', $date)) &&
            date_count_correct($date, 'mm/dd/yyyy')
        ) {
            $date_parts = explode('/', $date);

            return $date_parts[2] . '/' . $date_parts[0] . '/' . $date_parts[1];
        } else {
            return 'Invalid date format, expecting mm/dd/yyyy';
        }
    }

?>
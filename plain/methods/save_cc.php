<?php

    require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR.'db.php');
    require_once(dirname(__FILE__) . DIRECTORY_SEPARATOR.'validations.php');

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $id = null;
        $name = is_empty($_POST['name'], 'name');
        $balance = is_empty($_POST['balance'], 'balance');
        $credit = is_empty($_POST['credit'], 'credit');
        $due_date = is_date($_POST['due_date']);
        $apr = is_empty($_POST['apr'], 'apr');

        $stmt = $dbh->prepare('INSERT INTO credit_cards VALUES (
            :id, :name, :balance, :credit, :due_date, :apr)'
            );
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':balance', $balance, PDO::PARAM_STR);
        $stmt->bindParam(':credit', $credit, PDO::PARAM_STR);
        $stmt->bindParam(':due_date', $due_date, PDO::PARAM_STR);
        $stmt->bindParam(':apr', $apr, PDO::PARAM_STR);
        
        if ($stmt->execute()) {
            return_status(true, 'Credit card saved');
        }
        else {
            return_status(false, 'Failed to save credit card');
        }
    }

?>
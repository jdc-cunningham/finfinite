<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Finfinite - Plain</title>
        <link href="resources/css/css-reset.css" rel="stylesheet" type="text/css" />
        <link href="resources/css/css-form.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <form name="add-credit-card" class="add-credit-card">
            <div class="add-credit-card__form-row">
                <label for="card-name">Card name</label>
                <input type="text" id="card-name">
            </div>
            <div class="add-credit-card__form-row">
                <label for="card-balance">Card balance</label>
                <input type="number" step="0.01" id="card-balance">
            </div>
            <div class="add-credit-card__form-row">
                <label for="card-credit-limit">Card credit limit</label>
                <input type="number" step="1" id="card-credit-limit">
            </div>
            <div class="add-credit-card__form-row">
                <label for="card-due-date">Card due date</label>
                <input type="number" id="card-due-date" placeholder="dd" maxlength="2" min="1" max="31">
            </div>
            <div class="add-credit-card__form-row">
                <label for="card-apr">Card APR</label>
                <input type="number" step="0.01" id="card-apr">
            </div>
            <button type="button" id="save-credit-card">Add card</button>
        </form>
        <script src="resources/js/http-methods.js"></script>
        <script src="resources/js/add-credit-card.js"></script>
    </body>
</html>
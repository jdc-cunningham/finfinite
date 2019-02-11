function throwError(elementId) {
    document.getElementById(elementId).style.borderColor = 'red';
    setTimeout( function( ) {
        document.getElementById(elementId).style.borderColor = '#aaa';
    }, 1500);
}

function validateAddCreditCardForm() {
    var fields = [
            'card-name',
            'card-balance',
            'card-credit-limit',
            'card-due-date',
            'card-apr',
        ],
        payload = '';

    for (var i = 0; i < fields.length; i++) {
        var field = fields[i],
            fieldValue = document.getElementById(field).value;

        if ( !fieldValue ) {
            throwError(field);
            return false;
        }
        else {
            if (i == 0) {
                payload += field + '=' + fieldValue;
            }
            else {
                payload += '&' + field + '=' + fieldValue;
            }
        }
    }

    return payload;
}

document.getElementById( 'save-credit-card' ).addEventListener( 'click', function() {
    var ccPayload = validateAddCreditCardForm();

    if ( ccPayload ) {
        postAjax('./methods/save_cc.php', ccPayload, function( data ) {
            var saveResp = JSON.parse(data);

            if (saveResp.status == 'fail') {
                alert('Failed to save card: ' + saveResp.msg);
            }
            else {
                alert('Card saved');
            }
        });
    }
});
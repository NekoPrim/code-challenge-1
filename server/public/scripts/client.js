// source jquery
$(document).ready(onReady);

// main function
function onReady() {
    console.log('Ready to start!');

    // function for button
    $('#letterButton').on('click', onClick);
}

function onClick() {
    console.log('in onClick');

    // capture input value
    let letter = $('#letterInput').val();

    console.log(letter);

    // POST ajax
    $.ajax({
        method: 'POST',
        url: '/scrabbleTiles',
        data: letter
    })
        .then((response) => {
            console.log('response', response);
            getTile();
        })
        .catch((err) => {
            console.log('POST failed!');
            alert('Unable to send scabble tile. Try again later!');
        }) // catch any errors

    afterClick();
}

// clear input field after click
function afterClick() {
    console.log('in afterClick');

    $('#letterInput').val('');
}
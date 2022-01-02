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
    let scrabbleTile = {
        tile: $('#letterInput').val().toUpperCase()
    };

    console.log(scrabbleTile);

    // POST ajax
    $.ajax({
        method: 'POST',
        url: '/scrabble-tiles',
        data: scrabbleTile
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


// GET ajax
function getTile() {
    console.log('in getTile');

    let ajaxOptions = {
        method: 'GET',
        url: '/my-scrabble-tiles'
    };

    $.ajax(ajaxOptions).then((response) => {
        console.log('AJAX request complete!', response);

        postTile(response);
    })
        .catch((err) => {
            console.log('GET failed!');
            alert('Unable to get your scrabble tiles. Try again later!');
        })
}


// append scrabble tiles to DOM
function postTile(myTiles) {
    // clear div
    $('.listScrabble').empty();

    // add tile
}


// clear input field after click
function afterClick() {
    console.log('in afterClick');

    $('#letterInput').val('');
}
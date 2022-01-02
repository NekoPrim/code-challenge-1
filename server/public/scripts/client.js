// source jquery
$(document).ready(onReady);


// main function
function onReady() {
    console.log('Ready to start!');

    // function for button
    $('#letterButton').on('click', onClick);

    // list preloaded tiles in array
    getTile();
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
function postTile(response) {
    console.log('in postTile');

    // clear div
    $('.myTiles').empty();

    // loop through tiles. add to DOM
    for (let i = 0; i < response.length; i ++) {
        let mine = response[i];
        $('.myTiles').append(`
            <ul>
                <li><strong>${mine.tile}</strong>
                </br>
                <i>score: ${mine.score}</i>
                </li>
            </ul>
        `)
    }
}


// clear input field after click
function afterClick() {
    console.log('in afterClick');

    $('#letterInput').val('');
}
// setup express
const express = require('express');
const app = express();

// setup bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// setup static files
app.use(express.static('server/public'));

// setup PORT
const PORT = 5000;
app.listen(PORT, () => {
    console.log('server running on: ', PORT);
});// listening on local host: 5000 

// array to store data
let myScrabbleTiles = [
    { tile: 'N', score: 1 },
    { tile: 'K', score: 5 },
    { tile: 'Z', score: 10 },
    { tile: 'X', score: 8 },
    { tile: 'D', score: 2 },
    { tile: 'A', score: 1 }
];

// receive client POST
app.post('/scrabble-tiles', (req, res) => {
    console.log('in POST /scrabble-tiles', req.body);

    let scrabbleTile = req.body;
    console.log(scrabbleTile);

    // add score
    tileScore(scrabbleTile);

    // confirm success
    res.sendStatus(201);
})

// find score for tile
function tileScore(scrabble) {
    console.log('in tileScore');

    let points;

    if (scrabble.tile === ['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T', 'U']) {
        points = 1;
    }
    else if (scrabble.tile === ['D', 'G']) {
        points = 2;
    }
    else if (scrabble.tile === ['B', 'C', 'M', 'P']) {
        points = 3;
    }
    else if (scrabble.tile === ['F', 'H', 'V', 'W', 'Y']) {
        points = 4;
    }
    else if (scrabble.tile === 'K') {
        points = 5;
    }
    else if (scrabble.tile === ['J', 'X']) {
        points = 8;
    }
    else if (scrabble.tile === ['Q', 'Z']) {
        points = 10;
    }
    return points;
}
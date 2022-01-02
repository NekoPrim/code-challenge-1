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

// match tile to points
function tileScore(scrabble) {
    console.log('in tileScore');

    let thisTile;

    // switch statement to match tile to score
    switch(scrabble.tile) {
        case 'D':
        case 'G':
            thisTile = {
                tile: scrabble.tile,
                score: 2
            };
            break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
            thisTile = {
                tile: scrabble.tile,
                score: 3
            };
            break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
            thisTile = {
                tile: scrabble.tile,
                score: 4
            };
            break;
        case 'K':
            thisTile = {
                tile: scrabble.tile,
                score: 5
            }
            break;
        case 'J':
        case 'X':
            thisTile = {
                tile: scrabble.tile,
                score: 8
            }
            break;
        case 'Q':
        case 'Z':
            thisTile = {
                tile: scrabble.tile,
                score: 10
            }
            break;
        default:
            thisTile = {
                tile: scrabble.tile,
                score: 1
            }
    }

    console.log(thisTile);

    // add tile to array
    myScrabbleTiles.push(thisTile);
}


// response GET client.js
app.get('/my-scrabble-tiles', (req, res) => {
    console.log('in GET /my-scrabble-tiles');

    res.send(myScrabbleTiles);
})
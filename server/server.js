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
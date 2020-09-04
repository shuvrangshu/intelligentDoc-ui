'use strict';

// Imports dependencies and set up http server
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); // creates express http server

const request = require('request');

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

app.use(express.static(__dirname));

// Adds support for GET requests to our webhook
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname })
});
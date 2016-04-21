"use strict";
let express     = require('express');
let session     = require('express-session');
let bodyParser  = require('body-parser');

let api         = require('./src/api');

let app         = express();

// Serve client code
app.use(express.static('./public'));

// Use for Post requests.
app.use('/api', bodyParser.urlencoded({ extended: true }));
app.use('/api', bodyParser.json());

// Serve API
app.use('/api', api);

// Serve
app.listen(3000, () => {
    console.log('Todo application running on port 3000!');
});

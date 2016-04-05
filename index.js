"use strict";
let express     = require('express');
let bodyParser  = require('body-parser');
let api         = require('./src/api');

let app     = express();

// Serve client code
app.use(express.static('./public'));

// Use for Post requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve API
app.use('/api', api);

app.listen(3000, () => {
    console.log('Todo application running on port 3000!');
});

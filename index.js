"use strict";
let express = require('express');
let api     = require('./src/api');

let app     = express();

app.get('/',(req, res) => {
    // res.send('Hello World!');
});

app.use('/api', api);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

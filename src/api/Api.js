"use strict";
let express = require('express');

let api = express.Router();

api.get('/', (req, res) => {
        res.json({ message: 'hooray! welcome to our api!' });
    }
);

module.exports = api;

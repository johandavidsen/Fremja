"use strict";
let express     = require('express');
let api = require('./local');


let service = express.Router();

/**
 *
 */
service.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Todo API.' });
});

service.use(api);

module.exports = service;

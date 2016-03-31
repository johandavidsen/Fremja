"use strict";
let mongoose    = require('mongoose');
let Schema      = mongoose.Schema;

let TodoSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Todo', TodoSchema);

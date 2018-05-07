'use strict';
let express     = require('express');
let app         = express();

// Serve client code
app.use(express.static('./public'));

// Serve
app.listen(3002, () => {
    console.log('Todo application running on port 3000!');
});

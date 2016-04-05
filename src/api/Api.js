"use strict";
let express     = require('express');
let mongoose    = require('mongoose');

let Todo        = require('./model');

let api = express.Router();

// Connect to the mongodb.
mongoose.connect('mongodb://192.168.99.100:27017')

api.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Todo API.' });
});

api.route('/todos')

    .get((req, res) => {
        Todo.find(function(err, todos) {
            if (err) {
                res.send(err);
            }

            res.json(todos);
        });
    })

    .post((req, res) => {

        var todo = new Todo();
        todo.name = req.body.name;
        todo.done = req.body.done;

        todo.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Todo created!' });
        });

    });

api.route('/todos/:todo_id')

    .get((req, res) => {

        Todo.findById(req.params.todo_id, function(err, todo) {
            if (err) {
                res.send(err);
            }

            res.json(todo);
        });
    })

    .put((req, res) => {
        Todo.findById(req.params.todo_id, function(err, todo) {
            if (err) {
                res.send(err);
            }

            todo.name = req.body.object.name;
            todo.done = req.body.object.done;

            todo.save(function(err) {
                if (err) {
                    res.send(err);
                }

                // res.json({ message: 'Todo created!' });
            });

            res.json(todo);
        });
    })

    .post((req, res) => {

    })

    .delete((req, res) => {
        Todo.remove({
            _id: req.params.todo_id
        }, function(err, bear) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = api;

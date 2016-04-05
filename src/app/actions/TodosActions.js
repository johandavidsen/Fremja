import { Alt } from '../lib';
import request from 'superagent';

class TodosActions {

    getAllTodos(){
        var todos = [];
        var self = this;
        request.get('/api/todos')
            .accept('application/json')
            .query({ timestamp: new Date().getTime() })
            .end((err, res) => {

                if(!err && !res.error) {
                    var todos = JSON.parse(res.text);
                    self.notifyStore(todos);
                } else{

                }
            }
        );
    }

    newTodo( title ){
        var self = this;
        request.post('/api/todos')
            .send({ name: title, done: false })
            .end((err, res) => {
                self.getAllTodos();
            });
    }

    updateTodo( object ){
        var self = this;
        request.put('/api/todos/' + object._id)
            .send({ object: object})
            .end((err, res) => {
                self.getAllTodos();
            });
    }

    removeTodo( id ){
        var self = this;
        request.del('/api/todos/' + id)
            .end((err, res) => {
                self.getAllTodos();
            });
    }

    notifyStore( todos ){
        return todos;
    }
}

export default Alt.createActions(TodosActions);

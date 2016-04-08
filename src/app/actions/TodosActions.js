import { Alt } from '../lib';
import request from 'superagent';

/**
 * @class TodosActions
 *
 * This class contains all the actions for the TodoStore. The actions use the
 * superagent lib to make calls to the backend api.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class TodosActions {

    /**
     * Calls the /api/todos and then calls the notifyStore action with the returned
     * results.
     */
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

    /**
     * Create a new Todo on the /api/ and calls the getAllTodos method.
     */
    newTodo( title ){
        var self = this;
        request.post('/api/todos')
            .send({ name: title, done: false })
            .end((err, res) => {
                self.getAllTodos();
            });
    }

    /**
     * Update a particular Todo.
     */
    updateTodo( object ){
        var self = this;
        request.put('/api/todos/' + object._id)
            .send({ object: object})
            .end((err, res) => {
                self.getAllTodos();
            });
    }

    /**
     * Remove a particular Todo.
     */
    removeTodo( id ){
        var self = this;
        request.del('/api/todos/' + id)
            .end((err, res) => {
                self.actions.getAllTodos();
            });
    }

    /**
     * Notify the store.
     */
    notifyStore( todos ){
        return todos;
    }
}

export default Alt.createActions(TodosActions);

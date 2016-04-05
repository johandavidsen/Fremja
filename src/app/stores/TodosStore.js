import { Alt } from '../lib';
import { TodosActions } from '../actions';

class TodosStore {

    constructor(){
        var self = this;
        this.bindListeners({
            setTodos: TodosActions.notifyStore
        });
        this.on('init', function(){
            self.todos = [];
        });
    }

    setTodos( todos ){
        this.todos = todos;
    }
}

export default Alt.createStore(TodosStore, "TodosStore");

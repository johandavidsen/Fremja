import { Alt } from '../lib';
import { TodosActions } from '../actions';

/**
 * @class TodosStore
 *
 * This store holds the collection of Todos.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
class TodosStore {

    /**
     *
     */
    constructor(){
        var self = this;
        this.bindListeners({
            setTodos: TodosActions.NOTIFY_STORE
        });
        this.on('init', function(){
            self.todos = [];
        });
    }

    /**
     * Updates the stores todo collection.
     */
    setTodos( todos ){
        this.todos = todos.array;
    }
}

export default Alt.createStore(TodosStore, "TodosStore");

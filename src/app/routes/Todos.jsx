import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import { Todo } from '../components';

import { TodosActions, UserActions } from '../actions';
import { TodosStore } from '../stores';

/**
 * @class Todos
 *
 * The main route for the Todo application.
 *
 * TODO: Should write DefaultProps and PropsValidate.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class Todos extends React.Component {

    /**
     * @method constructor
     *
     * The constructor binds the relevant functions to this class and binds the
     * state to the TodosStore.
     *
     * @since 0.1.0
     *
     */
    constructor( props ){
        super( props );
        this.state = TodosStore.getState();
        this.state.newTodo = "";

        this._onChange = this._onChange.bind(this);

        this._signOut = this._signOut.bind(this);

        this._addTodo = this._addTodo.bind(this);
        this._onEnter = this._onEnter.bind(this);
        this._inputChange = this._inputChange.bind(this);
        this._updateTodo = this._updateTodo.bind(this);
        this._removeTodo = this._removeTodo.bind(this);
    }

    /**
     * @method componentDidMount
     *
     * This method is called, when the class is mounted on the client. The
     * method gets all the Todos and sets the listener to the method @see _onChange.
     *
     * @since 0.1.0
     *
     */
    componentDidMount(){
        TodosActions.getAllTodos();
        TodosStore.listen(this._onChange);
    }

    /**
     * @method componentWillUnmount
     *
     * This method is called, when the class is unmounted i.e. removed from the
     * client window. This method stops listening to the TodosStore.
     *
     * @since 0.1.0
     *
     */
    componentWillUnmount() {
        TodosStore.unlisten(this._onChange);
    }

    /**
     * @method _onChange
     *
     * This method is used by the listen event on the TodosStore.
     *
     * @since 0.1.0
     *
     */
    _onChange( todos ){
        this.setState( todos );
    }

    /**
     * @method _onEnter
     *
     * This method is used by the UI -> Input -> onKeyPress and listens for the
     * event "Enter".
     *
     * @since 0.1.0
     *
     */
    _onEnter( event ){
        if(event.key === 'Enter'){
            let todo = this.state.newTodo;
            TodosActions.newTodo( todo );
            this.setState({ newTodo: ""});
        }
    }

    /**
     *
     */
    _inputChange( event ){
        this.setState({ newTodo: event.target.value});
    }

    /**
     * @method _addTodo
     *
     * This method takes the value of the UI -> Input and creates a new Todo.
     *
     * TODO: Should test the string for valid values.
     *
     * @since 0.1.0
     *
     */
    _addTodo( value ){
        // Use the newTodo state value.
        let todo = this.state.newTodo;
        TodosActions.newTodo( todo );
        this.setState({ newTodo: ""});
    }

    /**
     * @method _updateTodo
     *
     * This method updates a particular Todo.
     *
     * TODO: Should validate structure of object.
     *
     * @since 0.1.0
     *
     */
    _updateTodo( object ){
        TodosActions.updateTodo( object );
    }

    /**
     * @method _removeTodo
     *
     * This method removs a particular Todo.
     *
     * TODO: Should ensure that the ID exists.
     *
     * @since 0.1.0
     *
     */
    _removeTodo( id ){
        TodosActions.removeTodo( id );
    }

    /**
     *
     */
    _signOut(){
        // @TODO: need to update react-router. 
        UserActions.logout();
    }

    /**
     * @method render
     *
     * This method is called by the React framework and returns a valid JSX structure.
     *
     * @since 0.1.0
     *
     */
    render(){

        let todos = this.state.todos.map(( element ) => {
            return (<Todo key={element._id} object={ element } update={this._updateTodo} delete={ this._removeTodo } />);
        });

        return(
            <div className="todo-app">
                <div className="row">
                    <Button onClick={this._signOut}>Signout</Button>
                </div>
                {todos}
                <div className="row todo-input-holder">
                    <div className="col-lg-10 todo-input">
                        <FormGroup controlId="todoName">
                            <FormControl
                                type="text"
                                placeholder="Enter todo"
                                value={this.state.newTodo}
                                onKeyPress={this._onEnter}
                                onChange={this._inputChange}>
                            </FormControl>
                        </FormGroup>
                    </div>
                    <div className="col-lg-2 todo-button" >
                        <Button bsStyle="link" onClick={this._addTodo}>
                            <i className="fa fa-plus"></i>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

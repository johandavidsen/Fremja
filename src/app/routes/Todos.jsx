import React from 'react';
import { Input, Button } from 'react-bootstrap';

import { Todo } from '../components';

import { TodosActions } from '../actions';
import { TodosStore } from '../stores';

/**
 * @class Todos
 *
 * The main route for the Todo application.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class Todos extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
        this.state = TodosStore.getState();
        this._onChange = this._onChange.bind(this);

        this._addTodo = this._addTodo.bind(this);
        this._onEnter = this._onEnter.bind(this);
        this._updateTodo = this._updateTodo.bind(this);
        this._removeTodo = this._removeTodo.bind(this);
    }

    /**
     *
     */
    componentDidMount(){
        TodosActions.getAllTodos();
        TodosStore.listen(this._onChange);
    }

    /**
     *
     */
    componentWillUnmount() {
        TodosStore.unlisten(this._onChange);
    }

    /**
     *
     */
    _onChange( todos ){
        this.setState( todos );
    }

    /**
     *
     */
    _onEnter( event ){
        if(event.key === 'Enter'){
            this._addTodo();
        }
    }

    /**
     *
     */
    _addTodo(){
        let title = this.refs.todoName.getValue();
        // Clear value of input.
        this.refs.todoName.refs['input'].value = '';
        TodosActions.newTodo(title);
    }

    /**
     *
     */
    _updateTodo( object ){
        TodosActions.updateTodo( object );
    }

    /**
     *
     */
    _removeTodo( id ){
        TodosActions.removeTodo( id );
    }

    /**
     *
     */
    render(){

        let todos = this.state.todos.map(( element ) => {
            return (<Todo key={element._id} object={ element } update={this._updateTodo} delete={ this._removeTodo } />);
        });
        return(
            <div className="todo-app">
                {todos}
                <div className="row">
                    <div className="col-lg-10">
                        <Input type="text" ref="todoName" onKeyPress={this._onEnter}></Input>
                    </div>
                    <div className="col-lg-2">
                        <Button bsStyle="link" onClick={this._addTodo}>
                            <i className="fa fa-plus"></i>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

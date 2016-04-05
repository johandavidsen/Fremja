import React from 'react';
import { Input, Button } from 'react-bootstrap';

import { Todo } from '../components';

import { TodosActions } from '../actions';
import { TodosStore } from '../stores';


export default class Todos extends React.Component {

    constructor( props ){
        super( props );
        this.state = TodosStore.getState();
        this._onChange = this._onChange.bind(this);

        this._addTodo = this._addTodo.bind(this);
        this._updateTodo = this._updateTodo.bind(this);
        this._removeTodo = this._removeTodo.bind(this);
    }

    componentDidMount(){
        TodosActions.getAllTodos();
        TodosStore.listen(this._onChange);

    }

    componentWillUnmount() {
        TodosStore.unlisten(this._onChange);
    }

    _onChange( todos ){
        this.setState( todos );
    }

    _addTodo(){
        let title = this.refs.todoName.getValue();
        // Clear value of input.
        this.refs.todoName.refs['input'].value = '';
        TodosActions.newTodo(title);
    }

    _updateTodo( object ){
        TodosActions.updateTodo( object );
    }

    _removeTodo( id ){
        TodosActions.removeTodo( id );
    }

    render(){

        let todos = this.state.todos.map(( element ) => {
            return (<Todo key={element._id} object={ element } update={this._updateTodo} delete={ this._removeTodo } />);
        });
        return(
            <div>
                {todos}
                <div className="row">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-8">
                        <Input type="text" ref="todoName"></Input>
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

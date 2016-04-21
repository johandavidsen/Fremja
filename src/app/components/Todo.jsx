import React from 'react';
import { Input, Button } from 'react-bootstrap';

/**
 * @class Todo
 *
 * This is the Todo component, which contains the properties and the methods for
 * the different Todos.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class Todo extends React.Component {

    /**
     * @method constructor
     *
     * The constructor binds the different methods to the class.
     *
     * @since 0.1.0
     */
    constructor( props ){
        super( props );
        this._deleteTodo = this._deleteTodo.bind(this);
        this._updateTodo = this._updateTodo.bind(this);
    }

    /**
     * @method _updateTodo
     *
     * This method is used to update the status of the Todo.
     *
     * @since 0.1.0
     *
     */
    _updateTodo(){
        let object = this.props.object;
        object.done = this.refs.check.checked;
        this.props.update(object);
    }

    /**
     * @method _deleteTodo
     *
     * This method delets this Todo.
     *
     * @since 0.1.0
     *
     */
    _deleteTodo(){
        this.props.delete(this.props.object._id)
    }

    /**
     * @method render
     *
     * This method returns a valid JSX object.
     *
     * @since 0.1.0
     *
     */
    render( ){

        let check = (
            <input type="checkbox" ref="check" checked={ this.props.object.done } onChange={ this._updateTodo } />
        );

        let status = "";

        if(this.props.object.done){
            status = "checked";
        }

        return (
            <div className="row">
                <div className="col-lg-10 todo-input">
                    <Input type="text" className={status} value={this.props.object.name} readOnly addonBefore={check} ></Input>
                </div>
                <div className="col-lg-2 todo-button">
                    <Button bsStyle="link" onClick={ this._deleteTodo }>
                        <i className="fa fa-minus"></i>
                    </Button>
                </div>
            </div>
        );
    }
}

/**
 * Specifies the property types.
 */
Todo.propTypes = {
    object: React.PropTypes.object,
    callback: React.PropTypes.func
}

/**
 * Set the default properties.
 */
Todo.defaultProps = {
    object: {},
    callback: () => {}
}

import React from 'react';
import { Form, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';

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
        this.state = this.props.object;
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
        this.setState({ done: !this.state.done });
        this.props.update(this.state);
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

        let status = "";
        if(this.state.done){
            status = "checked";
        }

        return (
            <div className="row">
                <div className="col-lg-10 todo-input">
                    <Form inline>
                        <FormGroup>
                            <Checkbox inline checked={ this.state.done } onChange={ this._updateTodo } ></Checkbox>
                            <FormControl inline type="text" className={status} value={this.state.name} readOnly></FormControl>
                        </FormGroup>
                    </Form>
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

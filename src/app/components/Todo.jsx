import React from 'react';
import { Input, Button } from 'react-bootstrap';

/**
 * Todo
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class Todo extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props );
        this._deleteTodo = this._deleteTodo.bind(this);
        this._updateTodo = this._updateTodo.bind(this);

    }

    _updateTodo(){
        let object = this.props.object;
        object.done = this.refs.check.getChecked();
        this.props.update(object);
    }

    _deleteTodo(){
        this.props.delete(this.props.object._id)
    }

    /**
     *
     */
    render( ){
        return (
            <div className="row">
                <div className="col-lg-2">
                    <Input type="checkbox" ref="check" onClick={ this._updateTodo } />
                </div>
                <div className="col-lg-8">
                    <Input type="text" value={this.props.object.name} readOnly ></Input>
                </div>
                <div className="col-lg-2">
                    <Button bsStyle="link" onClick={ this._deleteTodo }>
                        <i className="fa fa-minus"></i>
                    </Button>
                </div>
            </div>
        );
    }
}

Todo.propTypes = {
    object: React.PropTypes.object,
    callback: React.PropTypes.func
}

Todo.defaultProps = {
    object: {},
    callback: () => {}
}

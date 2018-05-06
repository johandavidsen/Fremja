import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../tasks'

class Modal extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            task: ''
        }

        this.createTask = this.createTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
    }

    updateTask (event) {
        this.setState({ task: event.target.value });
    }

    createTask () {
        const { dispatch } = this.props
        dispatch(addTodo(this.state.task))
        this.setState({ task: '' })
    }

    render () {
        return (
            <div id="createNewTask"
                 className="modal fade modal-create-new-task"
                 tabIndex="-1"
                 role="dialog"
                 aria-labelledby="createNewTask"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Nýggj uppgáva
                            </h5>
                            <button type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true"
                                      className="white-close">
                                    &times;
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input  type="text"
                                    className="form-control"
                                    placeholder="Heitið"
                                    value={this.state.task}
                                    onChange={this.updateTask} />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-light button-custom"
                                onClick={this.createTask}
                                >
                                Upprætta uppgávu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Modal)
import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../tasks'

class Modal extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            task: '',
            description: ''
        }

        this.createTask = this.createTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.updateDescription = this.updateDescription.bind(this)
    }

    updateTask (event) {
        this.setState({ task: event.target.value})
    }

    updateDescription (event) {
        this.setState({ description: event.target.value })
    }

    createTask () {
        const {dispatch} = this.props
        dispatch(addTodo({ title: this.state.task, description: this.state.description }))
        this.setState({task: '', description: ''})
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
                            <div className="form-group">
                                <label htmlFor="title">
                                    Navn á uppgávu
                                </label>
                                <input id="title"
                                       type="text"
                                       className="form-control"
                                       placeholder="Heitið"
                                       value={this.state.task}
                                       onChange={this.updateTask} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">
                                    Nærri lýsing
                                </label>
                                <textarea className="form-control"
                                          id="description"
                                          rows="3"
                                          value={this.state.description}
                                          onChange={this.updateDescription}
                                />
                            </div>
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
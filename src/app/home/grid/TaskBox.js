import React from 'react'
import PropTypes from 'prop-types'

class TaskBox extends React.Component {
    render () {
        return (
            <div className="card card-custom text-white shadow">
                <div className="card-body">
                    <h2>{ this.props.title }</h2>
                    <p className="card-text">
                        { this.props.content}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6 text-right">
                            { this.props.date }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

TaskBox.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

TaskBox.defaultProps = {
    title: 'Task',
    date: '2018-09-20'
}

export default TaskBox
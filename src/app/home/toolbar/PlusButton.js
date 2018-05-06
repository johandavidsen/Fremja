import React from 'react'
import PropTypes from 'prop-types'

class PlusButton extends React.Component {
    render () {
        return (
            <button type="button"
                    className="btn btn-outline-light"
                    data-toggle="modal"
                    data-target="#createNewTask">
                <i className="fa fa-plus fa-2x" />
            </button>
        )
    }
}

export default PlusButton
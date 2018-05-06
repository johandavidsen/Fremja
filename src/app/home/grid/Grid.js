import React from 'react'
import PropTypes from 'prop-types'

import TaskBox from './TaskBox'

const Grid = ({ tasks }) => (
    <div className="card-columns">
        {tasks.map(task => <TaskBox key={task.id} />)}
    </div>
)

Grid.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Grid
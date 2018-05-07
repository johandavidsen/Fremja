import React from 'react'
import PropTypes from 'prop-types'

import TaskBox from './TaskBox'
import Task from '../../tasks/Task'

const Grid = ({ tasks }) => (
    <div className="card-columns">
        {tasks.map(task =>
            <TaskBox
                key={task.id}
                title={task.title}
                content={task.description}
                date={
                    task.createdDate.getDate() + '-'
                    + task.createdDate.getMonth() + '-'
                    + task.createdDate.getFullYear()
                }
            />
        )}
    </div>
)

Grid.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.instanceOf(Task).isRequired
    ).isRequired
}

export default Grid
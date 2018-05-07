import { combineReducers } from 'redux'

/** Application Model */
import Task from './Task'

/** Actions */
let nextTodoId = 0

/**
 * Add a new todo
 *
 * @param text
 * @param description
 * @returns {{type: string, id: number, text: *}}
 */
export const addTodo = ({ title, description }) => ({
    type: 'ADD_TODO',
    task: new Task(nextTodoId++, title, description)
})

/**
 * Toggle a todo
 *
 * @param id
 * @returns {{type: string, id: *}}
 */
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

/**
 * This is the reducer function
 *
 * @param state
 * @param action
 * @returns {*}
 */
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
               action.task
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}

/**
 * The is the combined reducer for the todos
 */
export default combineReducers({
    todos
})
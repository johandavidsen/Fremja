import { combineReducers } from 'redux'

/** Actions */
let nextTodoId = 0

/**
 * Add a new todo
 *
 * @param text
 * @returns {{type: string, id: number, text: *}}
 */
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
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
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
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
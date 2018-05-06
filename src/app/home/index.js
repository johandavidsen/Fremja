import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

/** Application State */
import tasksReducer from '../tasks'

/** Create the store */
const store = createStore(tasksReducer)

/** Application Container */
import TasksGrids from './grid'
import Toolbar from './toolbar'
import Modal from './modal'

/**
 * @class Home
 *
 * Home is a context based view, which aims to provide an overview over a given
 * aspect. The default setup is that Home provides a user based overview over
 * tasks. The user has the option to zoom in on a project based context or an
 * release context.
 *
 */
const Home = () => (
    <Provider store={store}>
        <div className="container-fluid">
            <Modal />
            <TasksGrids />
            <Toolbar />
        </div>
    </Provider>
)

export default Home
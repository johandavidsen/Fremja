import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { IndexRoute, Nav } from './routes'

/**
 * @function Window.onload
 *
 * This function is the bootstrap for the whole application.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
window.onload = () => {
    ReactDOM.render(
        <Router>
            <div>
                <Nav />
                <Route path="/" component={ IndexRoute } />
            </div>
        </Router>
        , document.getElementById('app')
    )
}


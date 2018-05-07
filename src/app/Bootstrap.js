import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'bootstrap'

/** Components */
import Navigation from './navigation'

/** Routes */
import Home from './home'

/** Application */
const App = () => (
    <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/heima" component={Home} />
    </div>
)

/**
 * @function Window.onload
 *
 * This function is used by the Browserify library to mount the client-side
 * application.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
window.onload = () => {
    ReactDOM.render((
            <Router>
               <App />
            </Router>
        ),
        document.getElementById('container')
    )
}

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//SignIn, PageNotFound
import Todos from './routes/Todos';

//import { UserActions } from './actions';
//import { UserStore } from './stores';

// Little authorization function.
/*function requireAuth(nextState, replace) {

    // @TODO: the state dosen't get updated quickly enough.
    // Maybe NProgess would help.
    if (UserStore.getState().accessToken === null) {
        replace('/signin');
    }
}

// Before window load, bootstrap the user from localStorage.
UserActions.bootstrap();*/

// <Route path="*" component={ PageNotFound } />
//<IndexRoute component={ Todos } onEnter={requireAuth} />
//<Route path="/signin" component={ SignIn } />

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
            <Route path="/" component={ Todos } />
        </Router>
        , document.getElementById('container')
    )
}


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { SignIn, Todos, PageNotFound } from './routes';

import { UserActions } from './actions';
import { UserStore } from './stores';

// Little authorization function.
function requireAuth(nextState, replace) {

    // @TODO: the state dosen't get updated quickly enough.
    // Maybe NProgess would help.
    if (UserStore.getState().accessToken === null) {
        replace('/signin');
    }
}

// Before window load, bootstrap the user from localStorage.
UserActions.bootstrap();

/**
 * @function Window.onload
 *
 * This function is used by the Browserify library to build the client-side
 * application.
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
window.onload = () => {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" >
                <IndexRoute component={ Todos } onEnter={requireAuth} />
                <Route path="/signin" component={ SignIn } />
            </Route>
             <Route path="*" component={ PageNotFound } />
        </Router>
        , document.getElementById('container')
    );
}

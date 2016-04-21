import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import { SignIn, Todos, PageNotFound } from './routes';

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
            <Route path="/" component={ Todos } >
                <Route path="/todo" component={ SignIn } />
            </Route>
             <Route path="*" component={ PageNotFound } />
        </Router>
        , document.getElementById('container')
    );
}

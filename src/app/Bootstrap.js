import React from 'react';
import ReactDOM from 'react-dom';

import { SignIn, Todos } from './routes';


window.onload = () => {
    ReactDOM.render(<SignIn />, document.getElementById('container'));
    // ReactDOM.render(<Todos />, document.getElementById('container'));
}

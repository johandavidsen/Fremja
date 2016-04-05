import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './routes/Todos';

window.onload = () => {
    ReactDOM.render(<Todos />, document.getElementById('container'));
}

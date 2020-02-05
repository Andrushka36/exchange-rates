import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'core-js/es/array';
import 'core-js/es/object';
import 'core-js/es/promise';

import App from './components/App';

require('isomorphic-fetch');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
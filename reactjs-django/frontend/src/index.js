import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './index.css';
import './css-reset.css';
// import App from './App';

import * as serviceWorker from './serviceWorker';

import Routes from './Routes';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Routes />, document.getElementById('form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

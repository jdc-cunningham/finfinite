import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AddCreditCard from './CreditCard/AddCreditCard';
import Home from './Home/Home';
import Routes from './Routes/Routes';

const Routes = () => {
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/add-card" component={AddCreditCard} />
    </Router>
}

export default Routes
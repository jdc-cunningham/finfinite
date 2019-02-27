import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AddCreditCard from './../CreditCard/AddCreditCard';
import Home from './../Home/Home';

// const Routes = () => {
class Routes extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/add-card" component={AddCreditCard} />
                </div>
            </Router>
        );
    }
}
// }

export default Routes
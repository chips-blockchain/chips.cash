import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PokerInfo from './pages/PokerInfo';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/poker-info" component={PokerInfo} />
            </Switch>
        </Router>
    );
};

export default Routes;
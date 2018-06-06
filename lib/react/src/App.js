import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Main from './pages/Main';
import Page from './pages/Page';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/page" component={Page}/>
                </Switch>
            </Router>
        );
    }
}

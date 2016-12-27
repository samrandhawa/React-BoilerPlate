import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Root from './Root';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

export default class extends Component {
  render() {

    return (
      <Router history={browserHistory}>
        <Route path={ "/" } component={Root}>
            <IndexRoute component={Home}/>
            <Route path={ "home" } component={Home}/>
            <Route path={ "page1" } component={Page1}/>
            <Route path={ "page2" } component={Page2}/>
        </Route>
      </Router>
    );
  }
}

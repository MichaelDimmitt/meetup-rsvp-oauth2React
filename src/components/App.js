import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Route exact path="/" render={() => <Redirect to="/app/HomePage" />} />
          <Route path="/app" component={Routes} />
        </div>
      </Router>
    );
  }
}

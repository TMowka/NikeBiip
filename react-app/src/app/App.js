import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './home/Home/Home';
import Login from './auth/Login/Login';
import ErrorPage from './layout/ErrorPage/ErrorPage';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />

          <Route path="/404" component={ErrorPage} />
          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
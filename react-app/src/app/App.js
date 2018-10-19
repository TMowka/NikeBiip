import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { initialize } from './state/actions';

import Home from './home/Home/Home';
import SignIn from './auth/SignIn/SignIn';
import ErrorPage from './layout/ErrorPage/ErrorPage';

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />

          <Route path="/404" component={ErrorPage} />
          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    );
  }
}

App.propTypes = {
  initialize: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initialize())
});

export default connect(null, mapDispatchToProps)(App);
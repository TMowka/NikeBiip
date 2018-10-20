import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import {
  initialize, resize
} from './state/actions';

import Home from './home/Home/Home';
import SignIn from './auth/SignIn/SignIn';
import ErrorPage from './layout/ErrorPage/ErrorPage';

class App extends Component {
  componentDidMount() {
    this.props.initialize();
    this.resize();

    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.props.resize(window.innerWidth, window.innerHeight);
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
  initialize: PropTypes.func.isRequired,
  resize: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initialize()),
  resize: (width, height) => dispatch(resize(width, height))
});

export default connect(null, mapDispatchToProps)(App);
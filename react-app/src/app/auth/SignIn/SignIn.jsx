import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline, Paper, Avatar, Typography, FormControl,
  InputLabel, Input, FormControlLabel, Button, Checkbox,
  CircularProgress
} from '@material-ui/core';
import {
  LockOutlined
} from '@material-ui/icons';
import styles from './styles';

import {
  signIn
} from '../state/actions';

import AuthPage from '../../layout/AuthPage/AuthPage';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: false
  };

  onInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  onCheckboxChange = (event, checked) => {
    this.setState({
      rememberMe: checked
    });
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password, rememberMe } = this.state;

    this.props.signIn(email, password, rememberMe);
  }

  render() {
    const { classes, pending } = this.props;

    return (
      <AuthPage>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <div className={classes.wrapper}>
              <Avatar className={classes.avatar}>
                <LockOutlined />
              </Avatar>
              {pending && <CircularProgress className={classes.spin} />}
            </div>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.onInputChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onInputChange}
                />
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    onChange={this.onCheckboxChange}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={pending}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </AuthPage>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  signIn: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  pending: state.auth.pending
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password, rememberMe) => dispatch(signIn(email, password, rememberMe))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));
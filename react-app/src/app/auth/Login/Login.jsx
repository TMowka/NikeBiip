import React, { Component } from 'react';
import {
  Paper,
  Typography
} from '@material-ui/core';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <Paper>
        <Typography>
          Sign in
        </Typography>
      </Paper>
    );
  }
}

export default Login;
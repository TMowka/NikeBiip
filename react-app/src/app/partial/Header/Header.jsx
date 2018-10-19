import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  AppBar, Toolbar, Typography, IconButton, Menu,
  MenuItem
} from '@material-ui/core';
import {
  AccountCircle
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import {
  signOut
} from '../../auth/state/actions';

class Header extends Component {
  state = {
    anchorEl: null
  };

  onAccountMenuOpen = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  onAccountMenuClose = () => {
    this.setState({
      anchorEl: null
    });
  }

  onSignOut = () => {
    this.props.signOut();
  }

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);

    return (
      <AppBar position="static" className={classes.layout}>
        <Toolbar>
          <div className={classes.grow} />
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              color="inherit"
              onClick={this.onAccountMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.onAccountMenuClose}
            >
              <MenuItem>My account</MenuItem>
              <MenuItem onClick={this.onSignOut}>Sign Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  signOut: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));
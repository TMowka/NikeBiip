import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Header from '../../partial/Header/Header';
import SideBar from '../../partial/SideBar/SideBar';

const page = props => {
  const classes = props.classes;

  if (!props.isSignedIn) {
    return <Redirect to={{ pathname: '/signin' }} />;
  }

  return (
    <div className={classes.root} style={{ height: props.height }}>
      <Header />
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

page.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  height: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  isSignedIn: Boolean(state.auth.user),
  height: state.app.window.height
});

export default connect(mapStateToProps)(withStyles(styles)(page));
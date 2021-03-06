import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const authPage = props => {
  if (props.isSignedIn) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <div>
      {props.children}
    </div>
  );
};

authPage.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const mapStateToProps = state => ({
  isSignedIn: Boolean(state.auth.user)
});

export default connect(mapStateToProps)(authPage);
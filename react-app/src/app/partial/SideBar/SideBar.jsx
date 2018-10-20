import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';
import {
  Inbox, Drafts
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const sideBar = props => {
  const classes = props.classes;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </Drawer>
  );
};

sideBar.propTypes = {
  classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(sideBar);
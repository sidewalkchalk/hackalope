import React from 'react';
import { clearUser } from '../actions/index.js'
import { connect } from 'react-redux';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import axios from 'axios';

const LoggedInMenu = ({ user, dispatch}) => {
  // destroy session and remove user from store
  const handleLogout = () => {
    axios.post('/auth/logout')
    .then( response => {
      console.log(response)
      dispatch(clearUser());
    })
    .catch (err => {
      console.log(error);
    });
  };

  return (
    <IconMenu
      iconButtonElement= {
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <MenuItem primaryText="My Profile" />
      <MenuItem
        primaryText="Sign Out"
        onClick={handleLogout}/>
    </IconMenu>
  );
};

LoggedInMenu.muiName = 'IconMenu';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(LoggedInMenu);

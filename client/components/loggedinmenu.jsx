// Required React Components
import React from 'react';
import { clearUser } from '../actions/index.js'
import { connect } from 'react-redux';
import { Route, browserHistory, Redirect, Link } from 'react-router';

// Required Dependencies
import { logout, getUnapproved, openPendingSnackbar, getProfile } from '../helpers/helpers.js';

//Required Material UI dependancies 
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

const LoggedInMenu = ({ user, dispatch}) => {

  return (
    <IconMenu
      iconButtonElement= {
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      {user.admin ? <Link to="user/admin" ><MenuItem primaryText="Admin" onClick={() => {getUnapproved(dispatch); openPendingSnackbar(dispatch);}} /></Link>: null}
      <MenuItem primaryText="MyProfile" onClick={() => getProfile(dispatch)} />
      <MenuItem
        primaryText="Sign Out"
        onClick={() => logout(dispatch)}/>
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

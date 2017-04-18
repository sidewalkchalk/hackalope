// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// ACTIONS AND HELPERS
import { logout } from '../helpers/authHelpers.js';
import { getUnapproved } from '../helpers/adminHelpers.js';
import { openPendingSnackbar } from '../helpers/snackbarHelpers.js';
import { getProfile } from '../helpers/favoriteHelpers.js';
import { clearUser } from '../actions/index.js';

// MATERIAL UI
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

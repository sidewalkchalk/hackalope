// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// MATERIAL UI
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

// ACTIONS AND HELPERS
import { logout } from '../helpers/authHelpers.js';
import { getUnapproved } from '../helpers/adminHelpers.js';
import { openPendingSnackbar } from '../helpers/snackbarHelpers.js';
import { getProfile } from '../helpers/favoriteHelpers.js';
import { checkAvatar } from '../helpers/helpers.js';

const LoggedInMenu = ({ user, dispatch }) => (
  <div>
    <div style={{ position: 'absolute', right: 90, top: 12 }}>
      {checkAvatar(user)}
    </div>
    <IconMenu
      iconButtonElement={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      iconStyle={{ fill: 'white' }}
    >
      {user.admin ? <Link to="user/admin" style={{ textDecoration: 'none' }}>
        <MenuItem
          primaryText="Admin"
          onClick={() => { getUnapproved(dispatch); openPendingSnackbar(dispatch); }}
        /></Link> : null}
      <MenuItem
        primaryText="MyProfile"
        onClick={() => getProfile(dispatch)}
      />
      <MenuItem
        primaryText="Sign Out"
        onClick={() => logout(dispatch)}
      />
    </IconMenu>
  </div>

  );

LoggedInMenu.muiName = 'IconMenu';

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(LoggedInMenu);

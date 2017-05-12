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

// Styles
import { loggedinmenuStyles } from '../assets/harryStyles';

const LoggedInMenu = ({ user, dispatch }) => (
  <div>
    <div style={loggedinmenuStyles.avatarStyle}>
      {checkAvatar(user)}
    </div>
    <IconMenu
      iconButtonElement={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      targetOrigin={loggedinmenuStyles.targetOrigin}
      anchorOrigin={loggedinmenuStyles.anchorOrigin}
      iconStyle={loggedinmenuStyles.iconStyle}
    >
      {user.admin ? <Link to="user/admin" style={loggedinmenuStyles.userAdmin}>
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

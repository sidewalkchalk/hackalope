// Required React Components
import React from 'react';
import { connect } from 'react-redux';
import { closeLoggedInSnackbar, closeLoggedOutSnackbar, openAdminSnackbar,
         closeAdminSnackbar, closeSubmitSnackbar, closeApprovedSnackbar,
         closeUnapprovedSnackbar, closePendingSnackbar } from '../helpers/helpers.js';
import { Link, hashHistory } from 'react-router';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

// Required Modules
import Login from './login.jsx';
import LoggedInMenu from './loggedinmenu.jsx';
import LoggedOutMenu from './loggedoutmenu.jsx';

// Required Dependencies
import axios from 'axios';

injectTapEventPlugin(); // Initialize Tap/Click Events

const Nav = ({user, snackbar, unapproved, dispatch}) => {

  return (
    <MuiThemeProvider>
    <div>
      <AppBar
        iconElementLeft={
          <IconButton>
            <ArrowBack
              onClick={hashHistory.goBack}/>

          </IconButton>}
        title={<Link style={{"color": "inherit", "textDecoration": "none"}} to='/'>hackalope.io</Link>}
        iconElementRight={user._id ? <LoggedInMenu /> : <LoggedOutMenu />}
      />
    <Snackbar
      open={snackbar.login}
      message="Successfully Logged In"
      autoHideDuration={1300}
      onRequestClose={() => {closeLoggedInSnackbar(dispatch);
                              if(user.admin){
                                openAdminSnackbar(dispatch);
                              }}}
    />
    <Snackbar
      open={snackbar.logout}
      message="Successfully Logged Out"
      autoHideDuration={1300}
      onRequestClose={() => closeLoggedOutSnackbar(dispatch)}
    />
    <Snackbar
      open={snackbar.admin}
      message="Administrator Privilideges Activated"
      autoHideDuration={1300}
      onRequestClose={() => closeAdminSnackbar(dispatch)}
    />
    <Snackbar
      open={snackbar.submit}
      message="Resource Submitted For Review"
      autoHideDuration={1300}
      onRequestClose={() => closeSubmitSnackbar(dispatch)}
    />
    <Snackbar
      open={snackbar.approved}
      message="Submission Approved"
      autoHideDuration={1300}
      onRequestClose={() => closeApprovedSnackbar(dispatch)}
    />
    <Snackbar
      open={snackbar.unapproved}
      message="Submission Deleted"
      autoHideDuration={1300}
      onRequestClose={() => closeUnapprovedSnackbar(dispatch)}
    />
    <Snackbar
      open={snackbar.pending}
      message={`Submissions Pending Review: ${unapproved.length}`}
      autoHideDuration={1300}
      onRequestClose={() => closePendingSnackbar(dispatch)}
    />
    </div>
    </MuiThemeProvider>
	);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    dialogs: state.dialogs,
    snackbar: state.snackbar,
    unapproved: state.unapproved
  };
};

export default connect(mapStateToProps)(Nav)

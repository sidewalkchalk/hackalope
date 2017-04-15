// Required React Components
import React from 'react';
import { connect } from 'react-redux';

import { Link, hashHistory } from 'react-router';

// Required Dependencies
import Login from './login.jsx';
import LoggedInMenu from './loggedinmenu.jsx';
import LoggedOutMenu from './loggedoutmenu.jsx';
import axios from 'axios';
import { closeLoggedInSnackbar, closeLoggedOutSnackbar, openAdminSnackbar,
         closeAdminSnackbar, closeSubmitSnackbar, closeApprovedSnackbar,
         closeUnapprovedSnackbar, closePendingSnackbar } from '../helpers/helpers.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Snackbar from 'material-ui/Snackbar';

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
    snackbar: state.snackbar,
    unapproved: state.unapproved
  };
};

export default connect(mapStateToProps)(Nav)

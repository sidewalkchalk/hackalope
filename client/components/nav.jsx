// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';

// COMPONENTS
import Login from './login.jsx';
import LoggedInMenu from './loggedinmenu.jsx';
import LoggedOutMenu from './loggedoutmenu.jsx';

// ACTIONS AND HELPERS
import { closeUnapprovedSnackbar, closePendingSnackbar, closeLoggedInSnackbar,
         closeLoggedOutSnackbar, openAdminSnackbar, closeAdminSnackbar,
         closeSubmitSnackbar, closeApprovedSnackbar,
         closeNotAuthSnackbar } from '../helpers/snackbarHelpers.js';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Snackbar from 'material-ui/Snackbar';

injectTapEventPlugin(); // Initialize Tap/Click Events

const Nav = ({ user, snackbar, unapproved, dispatch }) => (
  <MuiThemeProvider>
    <div>
      <AppBar
        iconElementLeft={
          <IconButton>
            <ArrowBack
              onClick={hashHistory.goBack}
            />

          </IconButton>}
        title={<Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">hackalope.io</Link>}
        iconElementRight={user._id ? <LoggedInMenu /> : <LoggedOutMenu />}
      />
      <Snackbar
        open={snackbar.login}
        message="Successfully Logged In"
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => {
          closeLoggedInSnackbar(dispatch);
          if (user.admin) {
            openAdminSnackbar(dispatch);
          }
        }}
      />
      <Snackbar
        open={snackbar.logout}
        message="Successfully Logged Out"
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => closeLoggedOutSnackbar(dispatch)}
      />
      <Snackbar
        open={snackbar.admin}
        message="Administrator Privilideges Activated"
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => closeAdminSnackbar(dispatch)}
      />
      <Snackbar
        open={snackbar.submit}
        message="Resource Submitted For Review"
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => closeSubmitSnackbar(dispatch)}
      />
      <Snackbar
        open={snackbar.approved}
        message="Submission Approved"
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => closeApprovedSnackbar(dispatch)}
      />
      <Snackbar
        open={snackbar.unapproved}
        message="Submission Deleted"
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => closeUnapprovedSnackbar(dispatch)}
      />
      <Snackbar
        open={snackbar.pending}
        message={`Submissions Pending Review: ${unapproved.length}`}
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => closePendingSnackbar(dispatch)}
      />
      <Snackbar
        open={snackbar.notAuth}
        message="You need to be signed in to do that!"
        bodyStyle={{ background: '#c41b07' }}
        contentStyle={{ textAlign: 'center' }}
        autoHideDuration={1300}
        onRequestClose={() => closeNotAuthSnackbar(dispatch)}
      />
    </div>
  </MuiThemeProvider>
	);

const mapStateToProps = state => ({
  user: state.user,
  snackbar: state.snackbar,
  unapproved: state.unapproved,
});

export default connect(mapStateToProps)(Nav);

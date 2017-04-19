// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { login, handleLoginClose } from '../helpers/authHelpers.js';
import { userFormData } from '../actions/index.js';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const Login = ({ user, search, dialogs, dispatch }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary
      onTouchTap={() => handleLoginClose(dispatch)}
    />,
    <FlatButton
      label="Login"
      primary
      keyboardFocused
      onClick={e => login(e, user, search, dispatch)}
    />,
  ];

  return (
    <div style={{ alignContent: 'center' }}>
      <MuiThemeProvider>
        <Dialog
          autoScrollBodyContent
          title="Sign In"
          actions={actions}
          modal={false}
          open={dialogs.login}
          onRequestClose={() => dispatch(signUpDialog({ signUpDialog: false }))}
        >
          <form onSubmit={e => login(e, user, dispatch)}>
            <TextField
              name="username"
              value={user.username}
              floatingLabelText="Username"
              onChange={e => dispatch(userFormData({ username: e.target.value }))}
            /><br />
            <TextField
              name="password"
              value={user.password}
              floatingLabelText="Password"
              onChange={e => dispatch(userFormData({ password: e.target.value }))}
            /><br /><br />
            <div
              style={{ textAlign: 'center' }}
              onTouchTap={() => handleLoginClose(dispatch)}
            >
              <p>Sign in with Github</p>
              <a href="./auth/github"><img src="/public/assets/octocat.png" /></a>
            </div>
          </form>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  dialogs: state.dialogs,
  search: state.search,
});

export default connect(mapStateToProps)(Login);

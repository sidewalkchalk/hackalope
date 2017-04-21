// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

// ACTIONS AND HELPERS
import { login, handleLoginClose } from '../helpers/authHelpers.js';
import { userFormData, signUpDialog } from '../actions/index.js';

const Login = ({ user, search, dialogs, dispatch }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary
      onClick={() => handleLoginClose(dispatch)}
    />,
    <FlatButton
      label="Login"
      type="submit"
      primary
      keyboardFocused
      onClick={e => login(e, user, search, dispatch)}
    />,
  ];

  return (
    <div>
      <MuiThemeProvider>
        <Dialog
          contentStyle={{ width: '30%' }}
          autoScrollBodyContent
          title="Sign In"
          actions={actions}
          modal={false}
          open={dialogs.login}
          onRequestClose={() => handleLoginClose(dispatch)}
        >
          <TextField
            name="username"
            errorText="Required"
            value={user.username}
            floatingLabelText="Username"
            onChange={e => dispatch(userFormData({ username: e.target.value }))}
          /><br />
          <TextField
            name="password"
            type="password"
            errorText="Required"
            value={user.password}
            floatingLabelText="Password"
            onChange={e => dispatch(userFormData({ password: e.target.value }))}
          />
          <div
            style={{ textAlign: 'center' }}
            onTouchTap={() => handleLoginClose(dispatch)}
          >
            <p>Sign in with Github</p>
            <a href="./auth/github"><img src="/public/assets/octocat.png" alt="github" width="40" />
            </a>
          </div>
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

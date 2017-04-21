// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

// ACTIONS AND HELPERS
import { signup, handleSignUpClose } from '../helpers/authHelpers.js';
import { userFormData, clearUser } from '../actions/index.js';

const SignUp = ({ user, dialogs, dispatch }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary
      onTouchTap={() => handleSignUpClose(dispatch)}
    />,
    <FlatButton
      label="Submit"
      primary
      keyboardFocused
      onTouchTap={e => signup(e, user, dispatch)}
    />,
  ];

  return (

    <div>
      <MuiThemeProvider>
        <Dialog
          contentStyle={{ width: '30%' }}
          autoScrollBodyContent
          title="Join Hackalope"
          actions={actions}
          modal={false}
          open={dialogs.signup}
          onRequestClose={() => handleSignUpClose(dispatch)}
        >
          <TextField
            name="name"
            errorText="Required"
            value={user.name}
            floatingLabelText="Name"
            onChange={e => dispatch(userFormData({ name: e.target.value }))}
          /><br />
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
            onTouchTap={() => handleSignUpClose(dispatch)}
          >
            <p>Sign in with Github</p>
            <a href="./auth/github"><img src="/public/assets/octocat.png" alt="github" width="40" /></a>
          </div>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
};


const mapStateToProps = state => ({
  user: state.user,
  dialogs: state.dialogs,
});

export default connect(mapStateToProps)(SignUp);

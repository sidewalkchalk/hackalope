// Required React Components
import React from 'react';
import { Router, Route, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { userFormData } from '../actions/index.js';

// Required Dependencies
import { login, handleLoginClose } from '../helpers/helpers.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const Login = ({ user, search, dialogs, dispatch }) => {

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={() => handleLoginClose(dispatch)}
      />,
    <FlatButton
      label="Login"
      primary={true}
      keyboardFocused={true}
      onClick={(e) => login(e, user, search, dispatch)}
      />
  ];

  return (
    <div style={{alignContent: 'center'}}>
      <MuiThemeProvider>
        <Dialog
          autoScrollBodyContent={true}
          title="Sign In"
          actions={actions}
          modal={false}
          open={dialogs.login}
          onRequestClose={() => dispatch(signUpDialog({signUpDialog: false}))}
        >
          <form onSubmit={(e) => login(e, user, dispatch)}>
            <TextField name="username"
              value={user.username}
              floatingLabelText="Username"
              onChange={e => dispatch(userFormData({username: e.target.value}))}
            /><br/>
            <TextField name="password"
              value={user.password}
              floatingLabelText="Password"
              onChange={e => dispatch(userFormData({password: e.target.value}))}
            /><br/><br />
            <div style={{textAlign: "center"}}>
              <p>Sign in with Github</p>
              <a href='./auth/github'><img src="/public/assets/octocat.png" /></a>
            </div>
          </form>
        </Dialog>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    dialogs: state.dialogs,
    search: state.search
  }
};

export default connect (mapStateToProps)(Login);

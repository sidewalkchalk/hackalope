// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { selectUser, userFormData, logInDialog } from '../actions/index.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

// Required Dependencies
import axios from 'axios';
import { login, handleLoginClose } from '../helpers/helpers.js'

const Login = ({ user, dialogs, dispatch }) => {

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
      onTouchTap={(e) => login(e, user, dispatch)}
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
            /><br/>
          </form>
        </Dialog>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    dialogs: state.dialogs
  }
};

export default connect (mapStateToProps)(Login);

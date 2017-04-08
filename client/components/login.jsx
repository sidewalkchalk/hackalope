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

const Login = ({ user, dialogs, dispatch }) => {
  // log the user in
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    handleClose();
    axios.post('/auth/login', user)
      .then( response => {
        var userData = response.data
        // change the store to add the name, username, admin, _id, favorites
        dispatch(selectUser(userData));
      })
      .catch ( err => {
        console.error(err)
      })
  };

  const handleClose = () => {
    dispatch(logInDialog({loginDialog: false}));
  };

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={handleClose}
      />,
    <FlatButton
      label="Login"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleSubmit}
      />,
  ];


  return (
    <div style={{alignContent: 'center'}}>
      <MuiThemeProvider>

      <Dialog
        autoScrollBodyContent={true}
        title="Sign In"
        actions={actions}
        modal={false}
        open={dialogs.loginDialog}
        onRequestClose={() => dispatch(signUpDialog({signUpDialog: false}))}
      >

        <form onSubmit={handleSubmit}>
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
  };
};

export default connect (mapStateToProps)(Login);

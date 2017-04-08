import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SignUp from './signup.jsx';
import SignIn from './login.jsx';

import { connect } from 'react-redux';
import { signUpDialog, logInDialog } from '../actions/index.js'

const LoggedOutMenu = ({dispatch}) => {

  const openDialog = () => {
    dispatch(signUpDialog({signup: true}));
  };

  const closeDialog = () => {
    dispatch(signUpDialog({signup: false}));
  };

  const openLoginDialog = () => {
    dispatch(logInDialog({login: true}));
  };

  const closeLoginDailog = () => {
    dispatch(logInDialog({login: false}));
  };

  return (
    <div>
      <RaisedButton
        label="Sign Up"
        secondary={true}
        style={{margin: 12}}
        onTouchTap={() => openDialog()}
      />

      <RaisedButton label="Sign In" 
        secondary={true} 
        style={{margin: 12}}
        onTouchTap={() => openLoginDialog()} />
    </div>
  );
}

export default connect()(LoggedOutMenu);

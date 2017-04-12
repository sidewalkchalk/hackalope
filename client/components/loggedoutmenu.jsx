import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { handleSignUpOpen, handleLoginOpen } from '../helpers/helpers.js'
// need to put github icon instead of button
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';

import SignUp from './signup.jsx';
import SignIn from './login.jsx';
import { signUpDialog, logInDialog } from '../actions/index.js'
import axios from 'axios';


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

  const handleSubmit = () => {
    axios.get('auth/github')
      .then ( response => {
        console.log(response);
      })
      .catch ( err => {
        console.error(err);
      })
  };

  return (
    <div>
      <RaisedButton
        label="Sign Up"
        secondary={true}
        style={{margin: 12}}
        onTouchTap={() => handleSignUpOpen(dispatch)}
      />

      <RaisedButton label="Sign In"
        secondary={true}
        style={{margin: 12}}
        onTouchTap={() => handleLoginOpen(dispatch)}
      />

      <RaisedButton
        style={{margin: 12}}
        label="github"
        secondary={true}
        onTouchTap={(e) => handleSubmit(e)}
      />
    </div>
  );
}

export default connect()(LoggedOutMenu);

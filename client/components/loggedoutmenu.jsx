// Required React Components
import React from 'react';
import { connect } from 'react-redux';

// need to put github icon instead of button
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';

// Required Dependencies
import SignUp from './signup.jsx';
import SignIn from './login.jsx';
import { signUpDialog, logInDialog } from '../actions/index.js';
import axios from 'axios';
import { handleSignUpOpen, handleLoginOpen } from '../helpers/helpers.js';

//Required Material UI dependancies
import RaisedButton from 'material-ui/RaisedButton';


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
    <a href='/auth/github'>
      <RaisedButton
        style={{margin: 12}}
        label="github"
        secondary={true}
        onClick={() => handleSubmit()}
        />
    </a>
    </div>
  );
}

export default connect()(LoggedOutMenu);

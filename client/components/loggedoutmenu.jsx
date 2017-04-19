// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import SignUp from './signup.jsx';
import SignIn from './login.jsx';

// ACTIONS AND HELPERS
import { signUpDialog, logInDialog } from '../actions/index.js';
import { handleSignUpOpen, handleLoginOpen } from '../helpers/authHelpers.js';

// MATERIAL UI
import RaisedButton from 'material-ui/RaisedButton';

const LoggedOutMenu = ({ dispatch }) => (
  <div>
    <RaisedButton
      label="Sign Up"
      secondary
      style={{ margin: 12 }}
      onTouchTap={() => handleSignUpOpen(dispatch)}
    />

    <RaisedButton
      label="Sign In"
      secondary
      style={{ margin: 12 }}
      onTouchTap={() => handleLoginOpen(dispatch)}
    />
  </div>
  );

export default connect()(LoggedOutMenu);

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


const LoggedOutMenu = ({ dispatch }) => {

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
    </div>
  );
}

export default connect()(LoggedOutMenu);

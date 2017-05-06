// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import RaisedButton from 'material-ui/RaisedButton';

// ACTIONS AND HELPERS
import { handleSignUpOpen, handleLoginOpen } from '../helpers/authHelpers.js';

const LoggedOutMenu = ({ dispatch }) => (
  <div>
    <RaisedButton
      label="Sign Up"
      backgroundColor="#F7F7F8"
      labelColor="#252627"
      style={{ margin: 12 }}
      onTouchTap={() => handleSignUpOpen(dispatch)}
    />

    <RaisedButton
      label="Sign In"
      backgroundColor="#F7F7F8"
      labelColor="#252627"
      style={{ margin: 12 }}
      onTouchTap={() => handleLoginOpen(dispatch)}
    />
  </div>
  );

export default connect()(LoggedOutMenu);

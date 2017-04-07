import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SignUp from './signup.jsx';
import SignIn from './login.jsx';

import { connect } from 'react-redux';
import { signUpDialog } from '../actions/index.js'


const LoggedOutMenu = ({dispatch}) => {

  const openDialog = () => {
    dispatch(signUpDialog({signUpDialog: true}));
  };

  const closeDialog = () => {
    dispatch(signUpDialog({signUpDialog: false}));
  };

  return (
    <div>
      <RaisedButton
        label="Sign Up"
        secondary={true}
        style={{margin: 12}}
        onTouchTap={() => openDialog()}
      />

      <RaisedButton label="Sign In" secondary={true} style={{margin: 12}} />
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    dialogs: state.dialogs
  };
};

export default connect(mapStateToProps)(LoggedOutMenu);

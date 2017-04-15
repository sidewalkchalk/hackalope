// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// Required Dependencies
import { signup, handleSignUpClose } from '../helpers/helpers.js';
import { selectUser, userFormData, signUpDialog } from '../actions/index.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';



const SignUp = ({ user, dialogs, dispatch }) => {

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={() => handleSignUpClose(dispatch)}
      />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={(e) => signup(e, user, dispatch)}
      />,
  ];

  return (

  <div style={{alignContent: 'center'}}>
    <MuiThemeProvider>
      <Dialog
        autoScrollBodyContent={true}
        title="Join Hackalope"
        actions={actions}
        modal={false}
        open={dialogs.signup}
        onRequestClose={() => handleClose(dispatch)}
      >
        <form onSubmit={(e) => signup(e, user, dispatch)}>
          <TextField name="name"
            value={user.name}
            floatingLabelText="Name"
            onChange={e => dispatch(userFormData({name: e.target.value}))}
            /><br/>
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
)};


const mapStateToProps = (state) => {
  return {
    user: state.user,
    dialogs: state.dialogs
  };
};

export default connect(mapStateToProps)(SignUp);

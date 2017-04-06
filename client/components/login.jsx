// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { selectUser, signUpFormData } from '../actions/index.js';
import { bindActionCreators } from 'redux';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Required Dependencies
import axios from 'axios';
import authReducer from '../reducers/authreducer.jsx';

const Login = ({ user, dispatch }) => {
  // log the user in
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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

  return (
    <div style={{alignContent: 'center'}}>
      <MuiThemeProvider>

        <form onSubmit={handleSubmit}>
          <TextField name="username"
            value={user.username}
            floatingLabelText="Username"
            onChange={e => dispatch(signUpFormData({username: e.target.value}))}
          /><br/>
          <TextField name="password"
            value={user.password}
            floatingLabelText="Password"
            onChange={e => dispatch(signUpFormData({password: e.target.value}))}
          /><br/>

          <RaisedButton
            type="submit"
            label="Submit"
            secondary={true}
          />
        </form>
      </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect (mapStateToProps)(Login);

// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Required Dependencies
import axios from 'axios';
import authreducer from '../reducers/authreducer.jsx';

class SignUp extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
      <MuiThemeProvider>
      <form onSubmit={(event) => signUp(event)}>
          <TextField
            floatingLabelText="Name"
          /><br/>
          <TextField
            floatingLabelText="Username"
          /><br/>
          <TextField
            floatingLabelText="Password"
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
}

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

const matchDispatchToProps = (dispatch) => {
  return authreducer({name: 'james', username: 'james', password: 'james'}, dispatch)
}

const signUp = (event) => {
  event.preventDefault();
  console.log('hey guys')
}

export default connect (mapStateToProps, matchDispatchToProps)(SignUp);

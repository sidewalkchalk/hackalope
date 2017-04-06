// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect} from 'react-redux';
import { selectUser } from '../actions/index.js';
import { bindActionCreators } from 'redux';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Required Dependencies
import axios from 'axios';
import authReducer from '../reducers/authreducer.jsx';

class Login extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.post('/auth/login', this.state)
      .then( response => {
        var user = response.data
        // change the store to add the name and username
        this.props.selectUser(user);
      })
      .catch ( err => {
        console.error(err)
      })
  }

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
};

export default Login;

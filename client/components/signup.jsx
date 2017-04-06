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

    this.state = {
      name: '',
      username: '',
      password: ''
    }
    // bind methods to this
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.post('/auth/signup', this.state)
      .then( response => {
        console.log(response);
        // change the store to add the name and username
      })
      .catch ( err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div>
      <MuiThemeProvider>
      <form onSubmit={this.handleSubmit}>
          <TextField name="name"
            value={this.state.name}
            floatingLabelText="Name"
            onChange={e => this.setState({name: e.target.value})}
          /><br/>
        <TextField name="username"
            value={this.state.username}
            floatingLabelText="Username"
            onChange={e => this.setState({username: e.target.value})}
          /><br/>
        <TextField name="password"
            value={this.state.password}
            floatingLabelText="Password"
            onChange={e => this.setState({password: e.target.value})}
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

export default connect (mapStateToProps, matchDispatchToProps)(SignUp);

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
    //bind methods to this
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.post('/auth/login', this.state)
      .then( response => {
        var user = response.data
        // change the store to add user information
        this.props.selectUser(user);
      })
      .catch ( err => {
        console.error(err)
      })
  }

  render () {
    return (
      <div style={{alignContent: 'center'}}>
      <MuiThemeProvider>

      <form onSubmit={this.handleSubmit}>
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

function mapStateToProps (state) {
  return {
    state: state
  };
};
  // should be able to use store.dispatch(selectUser(user)) on 37 and delete
  //matchDispatchToProps but we'll worry about that on refactor
function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps)(Login);

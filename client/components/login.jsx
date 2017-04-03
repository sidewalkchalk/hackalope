// Required React Components
import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';

// Required Material UI Components
import FlatButton from 'material-ui/FlatButton';

class Login extends React.Component {

  constructor (props) {
    super (props);
  }

  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

export default Login;

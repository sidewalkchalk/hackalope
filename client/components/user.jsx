// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import Nav from './nav.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import Submit from './submit.jsx';

const User = props => (
  <div>
    <Nav />
    <Submit />
    {props.children}
    <SignUp />
    <Login />
  </div>
);

export default connect()(User);

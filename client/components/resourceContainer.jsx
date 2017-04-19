// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import Nav from './nav.jsx';
import Submit from './submit.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import Resource from './resource.jsx';

const ResourceContainer = props => (
  <div>
    <Nav />
    <Resource />
    <Submit />
    <SignUp />
    <Login />
    {props.children}
  </div>
	);

export default connect()(ResourceContainer);

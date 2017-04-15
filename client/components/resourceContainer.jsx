// Required React Components
import React from 'react';
import { connect } from 'react-redux';
// Required Modules
import Nav from './nav.jsx';
import Search from './search.jsx';
import Submit from './submit.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import Resource from './resource.jsx';

const ResourceContainer = (props) => {

	return (
    <div>
      <Nav />
      <Resource />
      <Submit />
			<SignUp />
      <Login />
      {props.children}
    </div>
	);
};

export default connect()(ResourceContainer);

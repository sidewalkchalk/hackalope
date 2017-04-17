// Required React Components
import React from 'react';
import { connect } from 'react-redux';
// Required Modules
import Nav from './nav.jsx';
import Search from './search.jsx';
import Submit from './submit.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';

const Landing = ({ user, dispatch }) => {

	return (
    <div>
      <Nav />
			<Search />
      <Submit />
			<SignUp />
      <Login />
    </div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Landing);

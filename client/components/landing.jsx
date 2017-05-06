// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import Nav from './nav.jsx';
import Search from './search.jsx';
import Submit from './submit.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';

// Styles
import { landingStyles } from '../assets/harryStyles';

const Landing = () => (
  <div>
    <Nav />
    <div style={landingStyles.div1}>
      <div style={landingStyles.div2}>
        <img
          alt="hackalope"
          src="/public/assets/ABC320x320_edited-1.jpg"
          style={landingStyles.logo}
        />
      </div>
      <div style={landingStyles.div3}>
        <Search />
      </div>
    </div>
    <Submit />
    <SignUp />
    <Login />
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Landing);

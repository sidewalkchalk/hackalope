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
import { mainStyles } from '../assets/harryStyles';

const Main = props => (
  <div>
    <Nav />
    <div style={mainStyles.main}>
      <div><Search /></div>
    </div>
    <Submit />
    <SignUp />
    <Login />
    {props.children}
  </div>
);

export default connect()(Main);

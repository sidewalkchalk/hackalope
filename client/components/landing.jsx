// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import Nav from './nav.jsx';
import Search from './search.jsx';
import Submit from './submit.jsx';
import SignUp from './signup.jsx';
import Login from './login.jsx';

const Landing = () => (
  <div>
    <Nav />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
      }}
    >
      <div
        style={{
          alignSelf: 'center',
          display: 'inline-block',
        }}
      >
        <img
          alt="hackalope"
          src="/public/assets/hack320x320.png"
          style={{ width: '320px',
            height: '320px',
          }}
        />
      </div>
      <div
        style={{
          alignSelf: 'center',
          display: 'inline-block',
        }}
      >
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

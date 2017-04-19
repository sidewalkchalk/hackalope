// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import Nav from './nav.jsx';
import Submit from './submit.jsx';

const Main = props => (
  <div>
    <Nav />
    <Submit />
    {props.children}
  </div>
	);

export default connect()(Main);

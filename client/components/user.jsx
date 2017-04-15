// Required React Components
import React from 'react';
import { connect } from 'react-redux';
// Required Modules
import Nav from './nav.jsx';
import Submit from './submit.jsx';


const Main = (props) => {

	return (
    <div>
      <Nav />
      <Submit />
      {props.children}
    </div>
	);
};

export default connect()(Main);

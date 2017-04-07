// Required React Components
import React from 'react';
import { connect } from 'react-redux';
// Required Modules
import Nav from './nav.jsx';
import Search from './search.jsx';

const Main = (props) => {

	return (
    <div>
      <Nav />
      <Search />
      {props.children}
    </div>
	);
};

export default connect()(Main);

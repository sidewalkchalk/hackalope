// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Required Modules
import Nav from './nav.jsx';
import Search from './search.jsx';

class Main extends React.Component {
	render(){
		return (
      <div>
        <Nav />
        <Search />
        {this.props.children}
      </div>
		);
	}
};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect (mapStateToProps)(Main);

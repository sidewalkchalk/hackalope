// Required React Components
import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Required Modules
import Nav from './nav.jsx';


class Main extends React.Component{

	constructor(props){
		super(props);
	}
	componentWillMount() {
		(testreducer) => {
			this.props.dispatch({
        	type: 'TEST',
        	testreducer: testreducer
      })
	  }
  }

	render(){
		return (
        <Nav />
		);
	}
}

const mapStateToProps = (state) => {
  return {
  	testreducer : state.testreducer,
    dispatch : state.dispach
  };
};

export default connect (mapStateToProps)(Main);

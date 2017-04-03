import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Main extends React.Component{

	constructor(props){
		super(props);
	}
	componentWillMount() {
		testaction((testreducer) => {
			this.props.dispatch({
        	type: 'TEST',
        	testreducer: testreducer
      })
	  })
  }

	render(){
		return (
      <MuiThemeProvider>
        <h1>Hello satan</h1>
      </MuiThemeProvider>
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

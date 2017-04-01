import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';

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
      <h1>Hello satan</h1>
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
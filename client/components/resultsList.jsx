import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Result from './result.jsx';

// import {bindActionCreator} from 'redux';

class ResultsList extends React.Component {
  
  constructor (props) {
    super (props);
  }
  renderResults() {
    return this.props.results.map((result) => {
      return (
         
        <div key = {result.id}>
          <Result key = {result.id} result = {result} />
          <br/>
        </div>

      );
    })
  }

  render () {
    return( 
      <ul>
        {this.renderResults()}
      </ul>
    );    
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

export default connect (mapStateToProps)(ResultsList);
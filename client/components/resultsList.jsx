import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';

// import {bindActionCreator} from 'redux';

class ResultsList extends React.Component {
  
  constructor (props) {
    super (props);
  }
  renderResults() {
    return this.props.results.map((result) => {
      return (
        <li key={result.id}>
          {result.title} {result.description}
        </li>  
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
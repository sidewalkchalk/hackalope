import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Result from './result.jsx';
import {bindActionCreators, createStore } from 'redux';
import { selectResult } from '../actions/index.js' 
// V this is used for an action on redux
// import {bindActionCreator} from 'redux';

class ResultsList extends React.Component {
  
  constructor (props) {
    super (props);
  }
  renderResults() {
    //map result is each card from result.jsx
    //card has clickable buttons already added but can use redux here for an on click action
    return this.props.results.map((result) => {
      return ( 
        <div key = {result.id}
          onClick={() => this.props.selectResult(result)}
          >
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
    results: state.results,
  }
}
function matchDispatchToProps (dispatch) {
  return bindActionCreators({selectResult:selectResult},dispatch);
} 
//connects redux to this component
export default connect (mapStateToProps, matchDispatchToProps)(ResultsList);
import React from 'react';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';
import Result from './result.jsx';
import {bindActionCreators } from 'redux';
import { selectResult } from '../actions/index.js'
// V this is used for an action on redux
import {bindActionCreator} from 'redux';


import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const ResultsList = ({results, dispatch}) => {

  const renderResults = () => {
    //map result is each card from result.jsx
    //card has clickable buttons already added but can use redux here for an on click action
    return results.map( result => {
      return (

        <div key = {result._id}
          onClick={() => dispatch(selectResult(result))}
          style={{zDepth: 10}}
          >
          <Result key = {result.id} result = {result} />
          <br/>
        </div>
      );
    });
  };

  const style = {
    marginRight: 10,
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed'
  };

  return (
    <MuiThemeProvider>
      <div style={{ display: 'inline-flex', flexDirection: 'column', width: '90%'}}>
        <div>
          <ul>
          {renderResults()}
          </ul>
        </div>
        <div style={{ alignSelf: 'center', width: '10%' }}>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    results: state.results,
  };
};

//connects redux to this component
export default connect (mapStateToProps)(ResultsList);

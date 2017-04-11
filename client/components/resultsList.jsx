import React from 'react';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';
import Result from './result.jsx';
import {bindActionCreators } from 'redux';
import { selectResult } from '../actions/index.js'
// V this is used for an action on redux
import {bindActionCreator} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';



import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const ResultsList = ({ results, dispatch }) => {

  const renderResults = () => {
    //map result is each card from result.jsx
    //card has clickable buttons, links to resource rendered on resource page
    return !results.length ? <h1>Nothing found!</h1> : results.map( result => {
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
        <Link className="profileView" to="/profile">
        <RaisedButton
        label="MY PROFILE"
        secondary={true}
        style={{margin: 12}}
        /></Link> 
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

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

export default connect (mapStateToProps)(ResultsList);

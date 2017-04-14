import React from 'react';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';
import Result from './result.jsx';
import {bindActionCreators } from 'redux';
import { selectResult } from '../actions/index.js'
// V this is used for an action on redux
import {bindActionCreator} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Required Dependencies
import { renderResults } from '../helpers/helpers.js'


const ResultsList = ({ results, dispatch }) => {

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
          {renderResults(results, dispatch)}
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

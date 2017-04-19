// Required React Components
import React from 'react';
import { Route, hashHistory, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// ACTIONS AND HELPERS
import { renderResults } from '../helpers/searchHelpers.js';

const ResultsList = ({ results, dispatch }) => results.resources ? (
  <MuiThemeProvider>
    <div style={{ display: 'inline-flex', flexDirection: 'column', width: '90%' }}>
      <div>
        <ul>
          {renderResults(results, dispatch)}
        </ul>
      </div>
      <div style={{ alignSelf: 'center', width: '10%' }} />
    </div>
  </MuiThemeProvider>
) : <h5 style={{ fontFamily: 'Roboto' }}>Oops! There aren't any results to display. Try searching again!</h5>;

const mapStateToProps = state => ({
  results: state.results,
});

export default connect(mapStateToProps)(ResultsList);

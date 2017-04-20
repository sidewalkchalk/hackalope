// Required React Components
import React from 'react';
import { Route, hashHistory, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// ACTIONS AND HELPERS
import { renderResults } from '../helpers/searchHelpers.js';

const ResultsList = ({ results, dispatch }) => {
  if (results.loaded && results.resources.length) {
    return (
      <MuiThemeProvider>
        <div style={{ display: 'inline-flex', position: 'relative', flexDirection: 'column', width: '72%', left: '50%', transform: 'translateX(-50%)' }}>
          <div>
            <ul style={{ alignSelf: 'center', position: 'relative', float: 'center' }} >
              {renderResults(results, dispatch)}
            </ul>
          </div>
          <div style={{ alignSelf: 'center', width: '10%' }} />
        </div>
      </MuiThemeProvider>
    );
  } else if (results.loaded && !results.resources.length) {
    return <h5 style={{ fontFamily: 'Roboto' }}>Oops! There aren't any results to display. Try searching again!</h5>;
  }
  return null;
};

const mapStateToProps = state => ({
  results: state.results,
});

export default connect(mapStateToProps)(ResultsList);

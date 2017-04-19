// Required React Components
import React from 'react';
import { Route, hashHistory, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';

// Required Dependencies
import { renderResults } from '../helpers/searchHelpers.js';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ResultsList = ({ results, dispatch }) => {
  const style = {
    marginRight: 10,
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed',
  };

  if (results.loaded && results.resources.length) {
    return (
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
    )
  }
  else if (results.loaded && !results.resources.length) {
    return <h5 style={{ fontFamily: 'Roboto' }}>Oops! There aren't any results to display. Try searching again!</h5>;
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  results: state.results,
});

export default connect(mapStateToProps)(ResultsList);

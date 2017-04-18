// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { renderResults } from '../helpers/searchHelpers.js';

// MATERIAL UI 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ResultsList = ({ results, dispatch }) => {

  const style = {
    marginRight: 10,
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed'
  };

  return results.resources ? (
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
  ) : <h5 style={{fontFamily: 'Roboto' }}>Oops! There aren't any results to display. Try searching again!</h5>;
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

export default connect (mapStateToProps)(ResultsList);

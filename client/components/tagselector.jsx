// Required React Components
import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';

// Required Dependencies
import { submissionData } from '../actions/index.js';

//Required Material UI dependancies 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const TagSelector = ({ submission, dispatch }) => {

  // Text area for receiving input
  // instruct user to add tags separated by commas or spaces
  return (

    <MuiThemeProvider>
      <div>
        <TextField name="Tag"
          value={submission.tags}
          floatingLabelText="Add a tag"
          multiLine={true}
          onChange={e => dispatch(submissionData({tags: e.target.value}))}
          /><br/>
      </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    submission: state.submission
  };
};

export default connect(mapStateToProps)(TagSelector);

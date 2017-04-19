// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

// ACTIONS AND HELPERS
import { submissionData } from '../actions/index.js';

const TagSelector = ({ submission, dispatch }) =>

  // Text area for receiving input
  // instruct user to add tags separated by commas or spaces
   (

     <MuiThemeProvider>
       <div>
         <TextField
           name="Tag"
           value={submission.tags}
           floatingLabelText="Add a tag"
           multiLine
           onChange={e => dispatch(submissionData({ tags: e.target.value }))}
         /><br />
       </div>
     </MuiThemeProvider>
  );

const mapStateToProps = state => ({
  submission: state.submission,
});

export default connect(mapStateToProps)(TagSelector);

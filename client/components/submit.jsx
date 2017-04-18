// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import TagSelector from './tagselector.jsx';
import { openNotAuthSnackbar } from '../helpers/snackbarHelpers.js';

// ACTIONS AND HELPERS
import { submissionData } from '../actions/index.js';
import { submit, handleSubmitClose, handleSubmitOpen } from '../helpers/submitHelpers.js';

// MATERIAL UI
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const Submit = ({user, submission, dialogs, dispatch}) => {

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={() => handleSubmitClose(dispatch)}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={(e) => submit(e, user, submission, dispatch)}
    />,
  ];

  const style = {
   marginRight: 10,
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed',
  };

  return (
    <MuiThemeProvider>
    <div>
      <FloatingActionButton
      secondary={true} style={style}
      onTouchTap={() => {
          if(user._id){
            handleSubmitOpen(dispatch);
          }
          else {
            openNotAuthSnackbar(dispatch);  
          }
      }}>
      <ContentAdd />
      </FloatingActionButton>
      <div>
      <Dialog
        autoScrollBodyContent={true}
        title="Submit a Resource"
        actions={actions}
        modal={false}
        open={dialogs.submit}
        onRequestClose={() => handleSubmitClose()}
      >

      <form onSubmit={(e) => submit(e, user, submission, dispatch)}>
        <div style={{ display: 'inline-flex', flexDirection: 'row'}}>
          <div>
            <TextField name="url"
              value={`${submission.url}`}
              floatingLabelText="URL"
              onChange={e => dispatch(submissionData({url: e.target.value}))}
            /><br/>
            <TextField name="impression"
              value={submission.impression}
              floatingLabelText="Impression"
              multiLine={true}
              onChange={e => dispatch(submissionData({impression: e.target.value}))}
            /><br/>
          </div>


          <div style={{ marginTop: 37, marginLeft: 15 }}> Language: </div>
          <div style={{ alignSelf: 'top', marginTop: 16 }}>


            <DropDownMenu
              id='submit-dropdown'
              onChange={(event, index, value) => dispatch(submissionData({language: value}))}
              autoWidth={true}
              value={submission.language}
            >
              <MenuItem value={'JavaScript'} primaryText="JavaScript" default />
              <MenuItem value={'Python'} primaryText="Python" />
              <MenuItem value={'Ruby'} primaryText='Ruby' />
              <MenuItem value={'HTML'} primaryText='HTML/CSS' />
              <MenuItem value={'Swift'} primaryText="Swift" />
              <MenuItem value={'Objective-C'} primaryText="Objective-C" />
              <MenuItem value={'Java'} primaryText="Java" />
            </DropDownMenu>

            <TagSelector />

          </div>
        </div>
      </form>

      </Dialog>
      </div>
    </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
    submission: state.submission,
    user: state.user
  }
}

export default connect(mapStateToProps)(Submit);

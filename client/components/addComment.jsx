// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

// HELPERS AND ACTIONS
import { newComment } from '../actions';
import { openNotAuthSnackbar } from '../helpers/snackbarHelpers';
import { addComment } from '../helpers/commentHelpers';

const AddComment = ({ dispatch, comment, user, result }) => {
  const style = {
    margin: 0,
    padding: 20,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
  };

  return (
    <div>
      <br />
      <MuiThemeProvider>
        <div>
          <Paper style={style} zDepth={2}>
            <form
              onSubmit={(e) => {
                if (user._id) {
                  addComment(e, user, result, comment, dispatch);
                  dispatch(newComment({ body: '' }))
                } else {
                  openNotAuthSnackbar(dispatch);
                }
              }}
            >
              <TextField
                value={comment.body}
                fullWidth
                hintText="Add a comment"
                multiLine
                rows={1}
                onChange={e => dispatch(newComment({ body: e.target.value }))}
              />
              <RaisedButton type="submit" secondary label="Comment" />
            </form>
          </Paper>
        </div>
      </MuiThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({
  comment: state.comment,
  user: state.user,
  result: state.result,
});

export default connect(mapStateToProps)(AddComment);

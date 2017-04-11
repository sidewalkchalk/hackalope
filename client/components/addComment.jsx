// Required React Components
import React from 'react';
import {connect} from 'react-redux';

//Required Material-UI components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { newComment } from '../actions/index.js';
import { addComment } from '../helpers/helpers.js'


const AddComment = ({dispatch, comment, user, result}) => {

  const style = {
    margin: 20,
    padding: 20,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block'
  };

    return (
      <MuiThemeProvider>
        <div>
          <Paper style={style} zDepth={2}>
            <form onSubmit={(e) => addComment(e, user, result, comment, dispatch)}>
              <TextField
                value={comment.body}
                fullWidth={true}
                hintText="Add a comment"
                multiLine={true}
                rows={1}
                onChange={(e) => dispatch(newComment({body: e.target.value}))}/>
              <RaisedButton type="submit" secondary={true} label="Submit"/>
            </form>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
}

const mapStateToProps = (state) => {
  return {
    comment: state.comment,
    user: state.user,
    result: state.result
  }
};

export default connect(mapStateToProps)(AddComment);

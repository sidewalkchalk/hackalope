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

import axios from 'axios';
import { newComment } from '../actions/index.js';
import { addComment } from '../helpers/helpers.js'

const style = {
    margin: 20,
    padding: 20,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block'
};

const AddComment = ({dispatch, comment, user, result}) => {

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     var newComment = {
    //         user: user._id,
    //         body: comment.body,
    //         resource: result._id,
    //     };
    //     axios.post('/comments', newComment)
    //       .then( response => {
    //         // TODO: rerender comments
    //         console.log("Response: ", response);
    //       })
    //     .catch ( err => {
    //       console.error(err)
    //     })
    // };

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

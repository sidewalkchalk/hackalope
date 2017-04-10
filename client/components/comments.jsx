// Required React Components
import React from 'react';
import { connect } from 'react-redux';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import { createStore , bindActionCreators} from 'redux';


//Required Material-UI components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

// Required Modules
import { commentsByAll } from '../actions/index.js';

// Required Dependancies
import axios from 'axios';

const style = {
  margin: 20,
  padding: 20,
  width: '70%',
  textAlign: 'center',
  display: 'inline-block',
};

const Comments = ({comments, dispatch}) => {

  const addComment = (e) => {
    e.preventDefault();
    var newComment = {
      user: user._id,
      body: e.body,
    };
    axios.post('/comments', newEntry)
      .then( response => {
        console.log(response);
        dispatch(submitDialog({submit: false}));
      })
      .catch ( err => {
        console.error(err)
      })
  };

  const renderComments = () => {
    return comments.map(comment => {
      return (
        <li key = {comment.unique} >
<<<<<<< HEAD



           <Card>
            <CardHeader
              title="Bucky Roberts"
              subtitle="Date Posted"
              avatar="https://avatars0.githubusercontent.com/u/8547538?v=3&s=460"
            />
            <CardText>
              {comment.body}
            </CardText>
          </Card>



        </li>
      );
    })
  };
  return (
    <div style={{ width: "65%", marginRight: 'auto', marginLeft: 'auto' }} >
      <ul style={{ 'listStyleType': 'none' }}>
      {renderComments()}
      </ul>
    </div>
  )
=======
          {comment.resourceID} {comment.body}
          <br/>
        </li>
      );
    })
  };
    return (
      <MuiThemeProvider>
        <div>
          <div style={{ width: '65%', marginRight: 'auto', marginLeft: 'auto' }}>
            <Paper style={style} zDepth={2} >
            <form onSubmit={addComment}>
              <TextField
                fullWidth={true}
                hintText="Add a comment"
                multiLine={true}
                rows={4}
              /><br />
              <RaisedButton secondary={true} label="Submit" fullWidth={true} />
              </form>
            </Paper>
          </div>
          <ul>
          {renderComments()}
          </ul>
        </div>
      </MuiThemeProvider>
    )
};

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
};

export default connect(mapStateToProps)(Comments);

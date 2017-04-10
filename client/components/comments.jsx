import React from 'react';
import { connect } from 'react-redux';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import { commentsByAll} from '../actions/index.js';
import { createStore , bindActionCreators} from 'redux';


//Required Material-UI components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import AddComment from './addComment.jsx';


const Comments = ({comments, dispatch}) => {

  const renderComments = () => {
    return comments.map(comment => {
      return (
        <li key = {comment.unique} >

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
    <AddComment />
      <ul style={{ 'listStyleType': 'none' }}>
      {renderComments()}
      </ul>
    </div>
  )
};
function mapStateToProps(state) {
  return {
    comments: state.comments
  }
};
export default connect(mapStateToProps)(Comments);

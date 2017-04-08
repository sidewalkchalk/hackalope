import React from 'react';
import { connect } from 'react-redux';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import { commentsByAll} from '../actions/index.js';
import { createStore , bindActionCreators} from 'redux';

const Comments = ({comments, dispatch}) => {

  const renderComments = () => {
    return comments.map(comment => {
      return (
        <li key = {comment.unique} >
          {comment.resourceID} {comment.body} 
          <br/>
        </li>    
      );
    })
  };
  return (
    <div>
      <ul>
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

// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Card, CardHeader, CardText } from 'material-ui/Card';

// COMPONENTS
import AddComment from './addComment.jsx';
import { checkAvatar } from '../helpers/helpers.js';
import moment from 'moment';

// Styles
import { commentsStyles } from '../assets/harryStyles';

const Comments = ({ comments }) => {
  const renderComments = () => comments.map(comment => (
    <li key={comment._id} >
      <Card>
        <span style={commentsStyles.avatarSpan}>
          {checkAvatar(comment)}
        </span>
        <CardHeader
          title={comment.user}
          subtitle={moment(comment.createdAt).format('L, h:mm a')}
          style={commentsStyles.cardHeader}
        />
        <CardText>
          <span style={commentsStyles.cardText}>
            {comment.body}
          </span>
        </CardText>
      </Card>
    </li>
  ));
  return (
    <div style={commentsStyles.addCommentDiv} >
      <AddComment />
      <ul style={commentsStyles.commentsUl}>
        {renderComments()}
      </ul>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}
export default connect(mapStateToProps)(Comments);

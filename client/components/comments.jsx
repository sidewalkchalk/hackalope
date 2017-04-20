// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Card, CardHeader, CardText } from 'material-ui/Card';

// COMPONENTS
import AddComment from './addComment.jsx';
import { checkAvatar } from '../helpers/helpers.js';
import moment from 'moment';

const Comments = ({ comments }) => {
  const renderComments = () => comments.map(comment => (
    <li key={comment._id} >
      <Card>
        <CardHeader
          title={comment.user}
          subtitle={moment(comment.createdAt).format('L, h:mm a')}
          avatar=""
        />
        <CardText>
          {comment.body}
        </CardText>
      </Card>
    </li>
      ));
  return (
    <div style={{ width: '65%', marginRight: 'auto', marginLeft: 'auto' }} >
      <AddComment />
      <ul style={{ listStyleType: 'none', WebkitPaddingStart: 0 }}>
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

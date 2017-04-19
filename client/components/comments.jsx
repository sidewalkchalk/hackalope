// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Card, CardHeader, CardText } from 'material-ui/Card';

// COMPONENTS
import AddComment from './addComment.jsx';
import moment from 'moment';

const Comments = ({ comments }) => {
  const renderComments = () => comments.map(comment => (
    <li key={comment._id} >
      <Card>
        <CardHeader
          title={comment.user}
          subtitle={moment(comment.createdAt).format('L, h:mm a')}
          avatar="https://avatars0.githubusercontent.com/u/8547538?v=3&s=460"
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
      <ul style={{ listStyleType: 'none' }}>
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

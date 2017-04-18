// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import AddComment from './addComment.jsx';

// MATERIAL UI
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Comments = ({comments, dispatch}) => {

  const renderComments = () => {
    return comments.map(comment => {
      return (
        <li key = {comment._id} >

           <Card>
            <CardHeader
              title={comment.user}
              subtitle={comment.createdAt}
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

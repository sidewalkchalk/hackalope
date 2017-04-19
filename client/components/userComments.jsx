// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { userProfile } from '../actions/index.js';
import { deleteComment } from '../helpers/commentHelpers.js';

// MATERIAL UI
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Delete from 'material-ui/svg-icons/action/delete.js';

const UserComments = ({profile, dispatch}) => {

  const renderUserComments = () => profile.comments.map(comment => (

        <li key = {comment._id} >
           <Card>
            <CardHeader
              title={comment.body}
              subtitle={comment.createdAt}
            />
            <CardText>
              Resource :  {comment.resource.title}
              <br/>
              URL :  {comment.resource.url}
            </CardText>
            <Delete 
              onClick={() => deleteComment(comment._id, comment.user, dispatch)}
            />
          </Card>
        </li>
      ));

  return (
    <div style={{ width: "100%", marginRight: 'auto', marginLeft: 'auto' }} >      
      <ul style={{ 'listStyleType': 'none' }}>
      {renderUserComments()}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}
export default connect(mapStateToProps)(UserComments);

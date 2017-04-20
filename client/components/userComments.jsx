// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { deleteComment } from '../helpers/commentHelpers.js';
import moment from 'moment';
// MATERIAL UI
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Delete from 'material-ui/svg-icons/action/delete.js';
import IconButton from 'material-ui/IconButton';

const UserComments = ({ profile, dispatch }) => {
  const renderUserComments = () => profile.comments.map(comment => (

    <li key={comment._id} >
      <Card>
        <CardHeader
          style={{position: 'relative', width: '80%', display: 'block' }}
          title={comment.body}
          subtitle={moment(comment.createdAt).format('L, h:mm a')}
        />
          <IconButton 
            style={{float: 'right'}}
          >
            <Delete
              style={{position: 'relative', marginTop: '20px'}}   
              onClick={() => deleteComment(comment._id, comment.user, dispatch)}
            />
          </IconButton>
        <CardText>  
          Resource :  {comment.resource.title}
          <br></br>
          URL :  {comment.resource.url}
        </CardText>

      </Card>
    </li>
  ));

  return (
    <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }} >
      <ul style={{ listStyleType: 'none' }}>
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

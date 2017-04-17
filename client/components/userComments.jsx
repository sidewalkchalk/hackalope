// Required React Components
import React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';

// Required Dependencies
import { userProfile } from '../actions/index.js';

//Required Material UI dependancies 
import {Card, CardHeader, CardText} from 'material-ui/Card';

const UserComments = ({profile, dispatch}) => {

  const renderUserComments = () => {
    return profile.comments.map(comment => {
      return (
        <li key = {comment._id} >

           <Card>
            <CardHeader
              title={comment.body}
              subtitle={comment.createdAt}
            />
            <CardText>
            </CardText>
          </Card>
        </li>
      );
    })
  };
  return (
    <div style={{ width: "100%", marginRight: 'auto', marginLeft: 'auto' }} >
      <ul style={{ 'listStyleType': 'none' }}>
      {renderUserComments()}
      </ul>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    profile:state.profile
  }
};
export default connect(mapStateToProps)(UserComments);

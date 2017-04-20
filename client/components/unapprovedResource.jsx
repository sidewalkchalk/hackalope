// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { editUnapproved } from '../actions/index';
import { checkAvatar } from '../helpers/helpers';
import { approveResource, unapproveResource } from '../helpers/adminHelpers';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

export const UnapprovedResource = ({ resource, dispatch, index }) => (
  <MuiThemeProvider>
    <li key={index} >
      <Card>
          <CardHeader
            title={`Submitted by ${resource.user.username} on ${resource.createdAt}`}
            avatar={checkAvatar(resource.user)}
          />
          <CardTitle title={resource.title} subtitle={resource.url} />
          <CardText>
            <p>Edit this submission below:</p>

            <TextField
              name="Title"
              value={resource.title}
              multiLine={true}
              style={{width: "50%"}}
              floatingLabelText="Edit Title"
              onChange={(e) => dispatch(editUnapproved({title: e.target.value, type: 'title', index: index}))}
            /><br />

            <TextField
              name="URL"
              value={resource.url}
              style={{width: "50%"}}
              floatingLabelText="Edit URL"
              onChange={(e) => dispatch(editUnapproved({url: e.target.value, type: 'url', index: index}))}
            /><br />

            <TextField
              name="Description"
              value={resource.description}
              multiLine={true}
              style={{width: "50%"}}
              floatingLabelText="Edit Description"
              onChange={(e) => dispatch(editUnapproved({description: e.target.value, type: 'description', index: index}))}
            /><br />

            <TextField
              name="Language"
              value={resource.language}
              multiLine={true}
              style={{width: "50%"}}
              floatingLabelText="Edit Language"
              onChange={(e) => dispatch(editUnapproved({language: e.target.value, type: 'language', index: index}))}
            /><br />

            <TextField
              name="Tags"
              value={resource.tags}
              multiLine={true}
              style={{width: "50%"}}
              floatingLabelText="Add, Edit, or Remove Tags"
              onChange={(e) => dispatch(editUnapproved({tags: e.target.value, type: 'tags', index: index}))}
            /><br />
          </CardText>

          <CardActions>
            <RaisedButton backgroundColor="#74FF1E" label="Approve" onClick={() => approveResource(resource, dispatch)} />
            <RaisedButton backgroundColor="#FF3439" label="Delete" onClick={() => unapproveResource(resource._id, dispatch)} />
          </CardActions>
        </Card>
    </li>
  </MuiThemeProvider>
);

const mapStateToProps = (state) => ({
    unapproved: state.unapproved
});

export default connect(mapStateToProps)(UnapprovedResource);

// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

// ACTIONS AND HELPERS
import { editUnapproved } from '../actions/index';
import { checkAvatar } from '../helpers/helpers';
import { approveResource, unapproveResource } from '../helpers/adminHelpers';

export const UnapprovedResource = ({ resource, dispatch, index }) => (
  <MuiThemeProvider>
    <li key={index} >
      <Card>
        <div style={{ position: 'relative', left: 20, top: 10 }}>
          {checkAvatar(resource.user)}
        </div>
        <CardHeader
          style={{ left: 70 }}
          title={`Submitted by ${resource.user.username} on ${resource.createdAt}`}
        />
        <CardTitle title={resource.title} subtitle={resource.url} />
        <CardText>
          <p>Edit this submission below:</p>

          <TextField
            name="Title"
            value={resource.title}
            multiLine
            style={{ width: '50%' }}
            floatingLabelText="Edit Title"
            onChange={e => dispatch(editUnapproved({ title: e.target.value, type: 'title', index }))}
          /><br />

          <TextField
            name="URL"
            value={resource.url}
            style={{ width: '50%' }}
            floatingLabelText="Edit URL"
            onChange={e => dispatch(editUnapproved({ url: e.target.value, type: 'url', index }))}
          /><br />

          <TextField
            name="Description"
            value={resource.description}
            multiLine
            style={{ width: '50%' }}
            floatingLabelText="Edit Description"
            onChange={e => dispatch(editUnapproved({ description: e.target.value, type: 'description', index }))}
          /><br />

          <TextField
            name="Language"
            value={resource.language}
            multiLine
            style={{ width: '50%' }}
            floatingLabelText="Edit Language"
            onChange={e => dispatch(editUnapproved({ language: e.target.value, type: 'language', index }))}
          /><br />

          <TextField
            name="Tags"
            value={resource.tags}
            multiLine
            style={{ width: '50%' }}
            floatingLabelText="Add, Edit, or Remove Tags"
            onChange={e => dispatch(editUnapproved({ tags: e.target.value, type: 'tags', index }))}
          /><br />
        </CardText>

        <CardActions>
          <RaisedButton
            backgroundColor="#74FF1E"
            label="Approve"
            onClick={() => approveResource(resource, dispatch)}
          />
          <RaisedButton
            backgroundColor="#FF3439"
            label="Delete"
            onClick={() => unapproveResource(resource._id, dispatch)}
          />
        </CardActions>
      </Card>
    </li>
  </MuiThemeProvider>
);

const mapStateToProps = state => ({
  unapproved: state.unapproved,
});

export default connect(mapStateToProps)(UnapprovedResource);

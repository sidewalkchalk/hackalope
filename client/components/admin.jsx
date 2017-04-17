// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import { approveResource, unapproveResource } from '../helpers/helpers.js';

// Required Dependencies
import axios from 'axios';

//Required Material UI dependancies 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const Admin = ({unapproved, dispatch}) => {

  const renderPending = () => {
    return unapproved.map( resource => {
      return (
        <li key = {resource._id} >
          <MuiThemeProvider>

            <Card>
              <CardHeader
                title= {`Created by: ${resource.user.name} Username: ${resource.user.username}`}
                subtitle={`Created on: ${resource.createdAt}`}
                avatar="https://avatars0.githubusercontent.com/u/8547538?v=3&s=460"
              />
              <CardTitle title={resource.title} subtitle={resource.url} />
              <CardText>
              id = {resource._id}<br/>
                {resource.description}
              </CardText>
              <CardActions>
                <RaisedButton backgroundColor="#74FF1E" label="Approve" onClick={() => approveResource(resource._id, dispatch)} />
                <RaisedButton backgroundColor="#FF3439" label="Delete" onClick={() => unapproveResource(resource._id, dispatch)} />
              </CardActions>
            </Card>

          </MuiThemeProvider>
          </li>
      );
    });
  };
  
  return (
    <MuiThemeProvider>
    <div>
    <h4 style={{fontFamily: 'Roboto' }}>Administration Panel</h4>
      <ul style={{ 'listStyleType': 'none' }}>
        {renderPending()}
      </ul>
    </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    unapproved: state.unapproved
  };
};

export default connect(mapStateToProps)(Admin);
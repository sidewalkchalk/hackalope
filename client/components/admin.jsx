// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import { approveResource, getUnapproved } from '../helpers/helpers.js';

//Required Material UI dependancies 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import axios from 'axios';


const Admin = ({comments, unapproved, dispatch}) => {

  //jsx

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
                {resource.description}
              </CardText>
              <CardActions>
                <RaisedButton backgroundColor="#74FF1E" label="Yuh" onClick={() => approveResource(resource._id)} />
                <RaisedButton backgroundColor="#FF3439" label="Nah" />
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
    <h2>Administration Panel</h2>
      <ul style={{ 'listStyleType': 'none' }}>
        {renderPending()}
      </ul>
    </div>
    </MuiThemeProvider>
  );
  

};


const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    unapproved: state.unapproved
  };
};

export default connect(mapStateToProps)(Admin);
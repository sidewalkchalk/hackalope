// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { Route, browserHistory, Redirect, Link  } from 'react-router';
import { connect } from 'react-redux';

// Required Dependencies
import Comments from './comments.jsx';

// Required Material-UI Components
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Resource = ({result, dispatch}) => {

  const renderTags = () => {
    //maps over each tag
    return result.tags.map( tag => {
      return (
        <li key = {tag}>
          {tag}
        </li>
      );
    });
  };

  const style = {
    marginRight: 10,
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed'
  };

  return (
    <MuiThemeProvider>
      <div>

        <Card style={{ position: 'relative', width: '100%', padding: 10 }}>
          <CardHeader
            title= {result.title}
            subtitle= {result.language}
            style={{position: 'relative', width: '60%', display: 'inline' }}
          />

          <CardText>
            <a href={`${result.url}`} >LINK</a>
            <br /> <br />
            {result.description} <br />
            <ul>
              {renderTags()}
            </ul>
          </CardText>
        </Card>

        <Comments />

      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
};

export default connect (mapStateToProps)(Resource);

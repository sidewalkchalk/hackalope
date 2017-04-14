// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { Route, browserHistory, Redirect, Link  } from 'react-router';
import { connect } from 'react-redux';

// Required Material-UI Components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DetailIcon from 'material-ui/svg-icons/image/details.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up.js';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down.js';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Required Components
import { selectResult } from '../actions/index.js';
import Comments from './comments.jsx';

//not using right now but will need once comments reducers/actions are made
//import Comment from './comment.jsx';

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

        <Link className="searching" to="/results">
          <RaisedButton
            label="BACK TO RESULTS"
            secondary={true}
            style={{ margin: 12}}
          />
        </Link>

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

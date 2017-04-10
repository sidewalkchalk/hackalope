// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';

// Required Material-UI Components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
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

class Resource extends React.Component {
  constructor (props) {
    super (props);

  }

  // renderTags() {
  //   //map result is each card from result.jsx
  //   //card has clickable buttons, links to resource rendered on resource page
  //   return this.props.result.tags.map( tag => {
  //     return (
  //       <li key = {result._id}>
  //         <CardText key = {result.id} tag = {tag} />
  //         <br/>
  //       </li>
  //     );
  //   });
  // };
  render () {
    if (!this.props.result) {
      return (<div>No result selected</div>);
    }
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
      <Card style={{ position: 'relative', fontSize: '30px', width: '100%', padding: 10 }}>
        <CardHeader
          title= {this.props.result.title}
          subtitle= {this.props.result.language}
          style={{position: 'relative', width: '60%', display: 'inline' }}
        />
        <div style={{ position: 'relative', display: 'inline-flex', float: 'right'}}>
        </div>
      <CardText>
          {this.props.result.description} <br></br>      
        </CardText>
      </Card> 
      <Comments />
      </div>
      </MuiThemeProvider>
     
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
};

export default connect (mapStateToProps)(Resource);

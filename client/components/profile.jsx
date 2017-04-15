// Required React Components
import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


// Required Dependencies


//Required Material UI dependancies 
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Comments from './userComments.jsx';
import Favorites from './userFavorites.jsx';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Profile = ({user, dispatch}) => {

  const style = {
    marginRight: 10,
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed'
  };

  return(
    <MuiThemeProvider>
      <div>
      <Card style={{ position: 'relative', width: '100%', padding: 10 }}>
        <CardHeader
          title= {user.name}
          subtitle= {user.username}
          avatar="https://avatars0.githubusercontent.com/u/8547538?v=3&s=460"
          style={{position: 'relative', width: '60%', display: 'inline' }}
        />
      <div style={{ position: 'relative', display: 'inline-flex', float: 'right'}}>
      </div>
        <CardText>
          This is where the users profile info goes!
          <br></br>      
        </CardText>
      </Card>       
        <hr></hr> 
        <h4 style={{fontFamily: 'Roboto' }}>MY FAVORITES</h4>
        <Favorites />
        <hr></hr> 
        <h4 style={{fontFamily: 'Roboto' }}>MY COMMENTS</h4>
        <Comments />
      </div>
    </MuiThemeProvider>
  )
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(Profile);

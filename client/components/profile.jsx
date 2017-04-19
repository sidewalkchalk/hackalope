// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS
import Comments from './userComments.jsx';
import Favorites from './userFavorites.jsx';

// MATERIAL UI
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


const Profile = ({ user, dispatch }) => {
  const style = {
    marginRight: 10,
    top: 'auto',
    right: 20,
    bottom: 20,
    position: 'fixed',
  };

  return (
    <MuiThemeProvider>
      <div>
        <h4 style={{ fontFamily: 'Roboto' }}>MY PROFILE</h4>

        <Card style={{ position: 'relative', width: '100%', padding: 10 }}>
          <CardHeader
            title={user.name}
            subtitle={user.username}
            avatar="https://avatars0.githubusercontent.com/u/8547538?v=3&s=460"
            style={{ position: 'relative', width: '60%', display: 'inline' }}
          />
          <div style={{ position: 'relative', display: 'inline-flex', float: 'right' }} />
          <CardText>
          This is where the users profile info goes!
          <br />
          </CardText>

        </Card>
        <hr />
        <h4 style={{ fontFamily: 'Roboto' }}><ActionFavoriteBorder /> MY FAVORITES </h4>

        <Favorites />
        <hr />
        <h4 style={{ fontFamily: 'Roboto' }}>MY COMMENTS</h4>
        <Comments />
      </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);

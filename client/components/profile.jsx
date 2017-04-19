// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { checkAvatar } from '../helpers/helpers.js';

// COMPONENTS
import Comments from './userComments.jsx';
import Favorites from './userFavorites.jsx';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

// COMPONENTS
import Comments from './userComments.jsx';
import Favorites from './userFavorites.jsx';

const Profile = ({ user }) => (
  <MuiThemeProvider>
    <div>
      <h4 style={{ fontFamily: 'Roboto' }}>MY PROFILE</h4>
      <Card style={{ position: 'relative', width: '100%', padding: 10 }}>
        <CardHeader
          title= {user.name}
          subtitle= {user.username}
          avatar={checkAvatar(user)}
          style={{position: 'relative', width: '60%', display: 'inline' }}
        />
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

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);

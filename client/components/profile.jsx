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

const Profile = ({ user }) => (

  <MuiThemeProvider>
    <div>
      <h4 style={{ fontFamily: 'Roboto', textAlign: 'center' }}>MY PROFILE</h4>
      <Card style={{ position: 'relative', width: '100%', padding: 10 }}>
        <div>
          {checkAvatar(user)}
        </div>
        <CardHeader
          title={user.name}
          subtitle={user.username}
          style={{ position: 'relative', width: '80%', display: 'inline', left: 50 }}
        />
      </Card>
      <h4 style={{ fontFamily: 'Roboto', textAlign: 'center' }}><ActionFavoriteBorder /> MY FAVORITES </h4>
      <Favorites />
      <h4 style={{ fontFamily: 'Roboto', textAlign: 'center' }}>MY COMMENTS</h4>
      <Comments />
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);

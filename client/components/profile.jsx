// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader } from 'material-ui/Card';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

// ACTIONS AND HELPERS
import { checkAvatar } from '../helpers/helpers.js';

// COMPONENTS
import Comments from './userComments.jsx';
import Favorites from './userFavorites.jsx';


const Profile = ({ user }) => (

  user._id ? (
  <MuiThemeProvider>
    <div>
      <h4 style={{ fontFamily: 'Roboto', textAlign: 'center' }}>MY PROFILE</h4>
      <Card style={{ display: 'block', marginRight: 'auto',  textAlign: 'center', marginLeft: 'auto', width: '40%', padding: 10 }}>
        <CardHeader
          title= {user.name}
          subtitle= {user.username}
          avatar={checkAvatar(user)}
          avatarStyle={{float: 'center'}}
          titleStyle={{ fontSize: '20px',  textAlign: 'center' }}
          style={{width: '50%', display: 'block',}}
        />
      </Card>
      <h4 style={{ fontFamily: 'Roboto', textAlign: 'center' }}><ActionFavoriteBorder /> MY FAVORITES </h4>
      <Favorites />
      <h4 style={{ fontFamily: 'Roboto', textAlign: 'center' }}>MY COMMENTS</h4>
      <Comments />
    </div>
  </MuiThemeProvider>
  ) : null
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);

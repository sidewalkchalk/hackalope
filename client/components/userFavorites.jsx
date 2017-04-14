// Required React Components
import React from 'react';
import { connect } from 'react-redux';
import { createStore , bindActionCreators} from 'redux';
import { userProfile } from '../actions/index.js'
import { getUserProfile, renderUserFavorites} from '../helpers/helpers.js';


//Required Material UI dependancies 
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Favorites = ({profile, dispatch}) => {

  const renderUserFavorites = () => {
    return profile.favorites.map(favorite => {
      return (
        <li key = {favorite._id} >
           <Card>
            <CardHeader
              title={favorite.title}
              subtitle={favorite.url}
            />
            <CardText>
              {favorite.rating} 
            </CardText>
          </Card>
        </li>
      );
    })
  };
  return (
    <div style={{ width: "100%", marginRight: 'auto', marginLeft: 'auto' }} >
      <ul style={{ 'listStyleType': 'none' }}>
      {renderUserFavorites()}
      </ul>
    </div>
  )
};


function mapStateToProps(state) {
  return {
    profile:state.profile
  }
};

export default connect(mapStateToProps)(Favorites);

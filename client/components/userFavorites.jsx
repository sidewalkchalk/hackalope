import React from 'react';
import { connect } from 'react-redux';
import { createStore , bindActionCreators} from 'redux';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { userProfile } from '../actions/index.js'


const Favorites = ({profile, dispatch}) => {

  const renderUserFavorites = () => {
    return profile.favorites.map(favorite => {
      return (
        <ul key = {favorite} >
           <Card>
            <CardHeader
              title={favorite}
              subtitle={favorite}
            />
            <CardText>
                Favorite info 
            </CardText>
          </Card>
        </ul>
      );
    })
  };
  return (
    <div>
      <li style={{ 'listStyleType': 'none' }}>
        {renderUserFavorites()}
      </li>
    </div>
  )
};


function mapStateToProps(state) {
  return {
    profile:state.profile
  }
};

export default connect(mapStateToProps)(Favorites);

import React from 'react';
import { connect } from 'react-redux';
import { createStore , bindActionCreators} from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import { findResourceById } from '../helpers/helpers.js'


const Favorites = ({user, result, results, dispatch}) => {

  const renderFavorites = () => {
    return user.favorites.map(favorite => {
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
        {renderFavorites()}
      </li>
    </div>
  )
};


function mapStateToProps(state) {
  return {
    user: state.user,
    results:state.results,
    result:state.result
  }
};

export default connect(mapStateToProps)(Favorites);

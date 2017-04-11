import React from 'react';
import { connect } from 'react-redux';
import { createStore , bindActionCreators} from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const Favorites = ({user, result, results, dispatch}) => {
  const renderFavorites = () => {
    return user.favorites.map(favorite => {
      return (
        <li key = {favorite.index} >
           <Card>
            <CardHeader
              title={favorite}
              subtitle={favorite}
            />
            <CardText>
                Favorite info 
              <br></br>
            </CardText>
          </Card>
        </li>
      );
    })
  };
  return (
    <div>
      <ul style={{ 'listStyleType': 'none' }}>
      {renderFavorites()}
      </ul>
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

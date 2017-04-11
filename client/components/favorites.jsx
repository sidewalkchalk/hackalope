import React from 'react';
import { connect } from 'react-redux';
import { createStore , bindActionCreators} from 'redux';


const Favorites = ({user, dispatch}) => {
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
              
              <br></br>
            </CardText>
          </Card>
        </li>
      );
    })
  };
  return (
    <div>
    Favorites Favorites Favorites Favorites Favorites Favorites
    {renderFavorites()}
    </div>
  )
};


function mapStateToProps(state) {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(Favorites);

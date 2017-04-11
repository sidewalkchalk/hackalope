import React from 'react';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Comments from './comments.jsx';
//import Favorites from './favorites.jsx';

const Profile = (props) => {
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
        <Link className="searching" to="/results">
        <RaisedButton
        label="BACK TO RESULTS"
        secondary={true}
        style={{margin: 12}}
        /></Link> 
        <h1> THIS IS WHERE FAVORITES AND COMMENTS AND NARWHALS WILL LIVE!</h1>
      </div>

    </MuiThemeProvider>    
  )  
};

export default Profile;

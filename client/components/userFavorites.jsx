// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { userProfile } from '../actions/index.js';

// MATERIAL UI
import { Card, CardHeader, CardActions, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentLink from 'material-ui/svg-icons/content/link.js';

const Favorites = ({ profile, dispatch }) => {
  const renderUserFavorites = () => profile.favorites.map(favorite => (
    <MuiThemeProvider>
      <li key={favorite._id} >
        <Card>
          <CardHeader
            title={favorite.title}
            subtitle={favorite.description}
          />
          <div>
            <CardActions>
              <RaisedButton
                label="Link"
                labelPosition="before"
                icon={<ContentLink />}
                primary
                style={styles.button}
                href={`${favorite.url}`}
                target="_blank"
              />
            </CardActions>
          </div>
        </Card>
      </li>
    </MuiThemeProvider>
      ));
  return (
    <div style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }} >
      <ul style={{ listStyleType: 'none' }}>
        {renderUserFavorites()}
      </ul>
    </div>
  );
};

const styles = {
  button: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 0,
  },
};


function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(Favorites);

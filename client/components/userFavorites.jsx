// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentLink from 'material-ui/svg-icons/content/link.js';

const styles = {
  button: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 0,
  },
};

const Favorites = ({ profile }) => {
  const renderUserFavorites = () => profile.favorites.map(favorite => (
    <div key={favorite._id}>
      <MuiThemeProvider>
        <li>
          <Card>
            <CardHeader
              title={favorite.title}
              subtitle={favorite.description}
            />
            <div>
              <CardActions>
                <RaisedButton
                  label="Link to Resource"
                  labelPosition="before"
                  icon={<ContentLink />}
                  backgroundColor="#2D3047"
                  labelColor="rgb(255, 255, 255)"
                  style={styles.button}
                  href={`${favorite.url}`}
                  target="_blank"
                />
              </CardActions>
            </div>
          </Card>
        </li>
      </MuiThemeProvider>
    </div>
      ));
  return (
    <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }} >
      <ul style={{ listStyleType: 'none' }}>
        {renderUserFavorites()}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

export default connect(mapStateToProps)(Favorites);

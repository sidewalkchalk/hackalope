// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ContentLink from 'material-ui/svg-icons/content/link.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// COMPONENTS
import Comments from './comments.jsx';

const Resource = ({ result }) => {
  const renderTags = () => {
    // maps over each tag
    if (!result.tags) {
      return;
    }
    return result.tags.map(tag => (
      <li key={tag}>
        {tag}
      </li>
      ));
  };

  const styles = {
    button: {
      maxWidth: 250,
    },
  };

  return (
    <MuiThemeProvider>
      <div>

        <Card style={{ position: 'relative', width: '100%', padding: 10 }}>

          <div style={{ paddingTop: '10px', verticalAlign: 'middle', position: 'relative', top: '-40%', left: 10, display: 'inline-block', float: 'left' }}>
            <img src={`${result.image}`} width="40" />
          </div>
          <CardHeader
            title={result.title}
            subtitle={result.language}
            style={{ position: 'relative', top: 10, width: '60%', display: 'inline' }}
          />

          <CardText>
            <span style={{ position: 'relative', float: 'right' }}>
              <CardActions>
                <a
                  href={`${result.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RaisedButton
                    label="Link"
                    labelPosition="before"
                    icon={<ContentLink />}
                    primary
                    style={styles.button}
                  />
                </a>
              </CardActions>
            </span>
            <br /> <br />
            {result.description} <br />
            <ul>
              {renderTags()}
            </ul>
          </CardText>
        </Card>

        <Comments />

      </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = state => ({
  result: state.result,
});

export default connect(mapStateToProps)(Resource);

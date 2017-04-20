// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ContentLink from 'material-ui/svg-icons/content/link.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';


// COMPONENTS
import Comments from './comments.jsx';

const Resource = ({ result }) => {
  const renderTags = () => {
    // maps over each tag
    if (!result.tags) {
      return;
    }
    return result.tags.map(tag => (
      <Chip style={{ margin: 4 }} >
        {tag}
      </Chip>
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

        <Card style={{ width: '72%', marginRight: 'auto', marginLeft: 'auto', padding: 10 }}>


          <div id="wrapper" style={{ width: '100%' }} >

            <div id="div1" style={{ float: 'left', width: '70%' }}>
              <div style={{ paddingTop: '10px', verticalAlign: 'middle', position: 'relative', top: '-40%', left: 10, display: 'inline-block', float: 'left' }}>
                <img src={`${result.image}`} width="40" />
              </div>
              <CardHeader
                title={result.title}
                subtitle={result.language}
                style={{ position: 'relative', top: 10, width: '60%', display: 'inline' }}
              />
            </div>

            <div id="div2" style={{ float: 'right', width: '30%' }} >
              <CardActions>
                <a
                  href={`${result.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RaisedButton
                    label="Link to Resource"
                    labelPosition="before"
                    icon={<ContentLink />}
                    primary
                    style={styles.button}
                  />
                </a>
              </CardActions>
            </div>
            <br />
          </div>

          <CardText>
            <span style={{ position: 'relative', float: 'right' }} />
            <br /> <br />
            <div style={{ width: '100%', wordWrap: 'break-word' }} >
              <span style={{ fontSize: '15px', fontWeight: 500 }} >Site Description:</span><br /><br />
              <div style={{ marginLeft: 10 }}>{result.description}</div>
              <br /><br />
              <span style={{ fontSize: '15px', fontWeight: 500 }} >What&apos;s it about?</span><br /><br />
              <div style={{ marginLeft: 10 }}>{result.impression}</div>
            </div>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 10 }}>
              {renderTags()}
            </div>
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

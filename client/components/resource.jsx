// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { selectResult } from '../actions/index.js';
import Comments from './comments.jsx';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Resource extends React.Component {
  constructor (props) {
    super (props);
    
  }
  render () {
    if (!this.props.result) {
      return (<div>No result selected</div>);
    }

    return (
      <MuiThemeProvider>
        <div>
          <h2>TITLE:  {this.props.result.title}</h2>
          <h4>LANGUAGE:  {this.props.result.language}</h4>
          <a href = "{this.props.result.URL}">{this.props.result.URL}</a>
          <h4>DESCRIPTION:  {this.props.result.description}</h4>
          <h4>TAGS:  {this.props.result.tags}</h4>
          <hr></hr>
          <Comments />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
};

export default connect (mapStateToProps)(Resource);

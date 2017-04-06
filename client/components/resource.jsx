// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { selectResult } from '../actions/index.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//not using right now but will need once comments reducers/actions are made
//import Comment from './comment.jsx';

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
          <h4> We're the best around! nothing is ever gonna keep us down</h4>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  };
};

export default connect (mapStateToProps)(Resource);

// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { selectResult } from '../actions/index.js' 

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Required Modules

//not using right now
//import Comment from './comment.jsx';
//import ResultsList from './resultsList.jsx';

class ResultDetail extends React.Component {
  
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
          <h2>{this.props.result.title}</h2>
          <h3>{this.props.result.language}</h3>
          <h2> We're the best around! nothing is ever gonna keep us down</h2>  
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

export default connect (mapStateToProps)(ResultDetail);
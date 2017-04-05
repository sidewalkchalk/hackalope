// Required React Components
import React from 'react';
import { createStore } from 'redux';
import { Route, browserHistory, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Result from './result.jsx'
// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Required Modules
import Main from './main.jsx';
import Search from './search.jsx';
//not using right now
//import Comment from './comment.jsx';
//import ResultsList from './resultsList.jsx';
import routes from '../routes.jsx';

class ResultDetail extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Main />
          <h2> We're the best around! nothing is ever gonna keep us down</h2>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    testreducer : state.testreducer,
    dispatch : state.dispatch
  };
};

export default connect (mapStateToProps)(ResultDetail);

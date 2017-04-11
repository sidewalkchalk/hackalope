// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';

//Required Material UI dependancies 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import axios from 'axios';


const Admin = ({comments, dispatch}) => {

  //jsx

  const renderPending = () => {
    return comments.map( comment => {
      return (
        <h1>Sup bish</h1>
      );
    });
  };

  return (
    <MuiThemeProvider>
    <div>
    <p>HELLO</p>
      {renderPending()}
      </div>
    </MuiThemeProvider>
  );
  

};


const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Admin);
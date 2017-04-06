import React from 'react';
import { connect } from 'react-redux';
import { Route, browserHistory, Redirect, Link } from 'react-router';
import { selectResult } from '../actions/index.js';
import {bindActionCreators, createStore } from 'redux';


const Comment = (props) => (

);

function mapStateToProps(state) {
  return {
    comments: state.comments,
  }
}

export default connect(mapTo)(Comment);

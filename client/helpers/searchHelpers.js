import * as actions from '../actions/index.js';
import axios from 'axios';
import { hashHistory } from 'react-router';
import React from 'react';
import Result from '../components/result.jsx';

// set title case for searchTerm
export const titleCase = str => str.replace(/\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

export const buildQuery = value => value.term ?
    `language=${value.language}&term=${value.term}` :
    `language=${value.language}`;

// search the database for resources
export const handleSearch = (query, dispatch) => {
  query.term = titleCase(query.term);
  dispatch(actions.resultsLoaded({loaded: false}))
  // store the current search query
  dispatch(actions.searchQuery(query));
  // build query string and search
  query = buildQuery(query);
  axios.get(`/search?${query}`)
    .then((response) => {
      dispatch(actions.clearSearch()),
      dispatch(actions.searchResults(response.data));
      dispatch(actions.resultsLoaded({loaded: true}));
      hashHistory.push('/main/results');
    })
    .catch((err) => {
      console.error(err);
    });
};

export const renderResults = (results, dispatch) => results.resources.map(result => (
  <div
    key={result._id}
    onClick={() => dispatch(actions.selectResult(result))}
    style={{ zDepth: 10 }}
  >
    <Result key={result.id} result={result} />
  </div>
));

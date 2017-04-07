// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { searchTerm } from '../actions/index.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Temporary topics being rendered in search (once redux is ready these should be global and dynamic)
const topics = [
  'Objects',
  'Arrays',
  'ES6',
  'React',
  'Angular',
  'Redux',
  'Webpack',
  'Node',
];

const Search = ({search, dispatch}) => {

  return (
    <MuiThemeProvider>
    <div id ='search' style={{alignContent: 'center', alignSelf: 'center', position: 'relative', display: 'inline-flex', float: 'center'}}>
      <DropDownMenu
        id='search-dropdown'
        value={search.value}
        onChange={(event, index, value) => dispatch(searchTerm({value: value}))}
        autoWidth={true}
      >
        <MenuItem value={1} primaryText="JavaScript" default />
        <MenuItem value={2} primaryText="Swift" />
        <MenuItem value={3} primaryText="Objective-C" />
        <MenuItem value={4} primaryText="Java" />
        <MenuItem value={5} primaryText="Python" />
      </DropDownMenu>
      <AutoComplete
        style={{alignSelf: 'center'}}
        hintText="What would you like to learn today?"
        searchText={search.term}
        onUpdateInput={e => dispatch(searchTerm({term: e}))}
        onNewRequest={() => dispatch(searchTerm({term: ''}))}
        dataSource={topics}
        filter={AutoComplete.caseInsensitiveFilter}
        openOnFocus={true}
      />
      <RaisedButton
      label="Let's go!"
      secondary={true}
      style={{margin: 12}}
      containerElement={<Link to="/results" />}
      />
    </div>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps)(Search);

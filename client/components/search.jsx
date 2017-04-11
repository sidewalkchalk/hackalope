// Required React Components
import React from 'react';
import { Router, Redirect, Link } from 'react-router';
import { connect } from 'react-redux';
import { searchTerm, clearSearch, searchResults } from '../actions/index.js';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Required Dependencies
import { handleSearch } from '../helpers/helpers.js'

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

  // const handleSearch = (value) => {
  //   value.term = titleCase(value.term);
  //
  //   axios.post('/', value)
  //     .then (response => {
  //       dispatch(clearSearch());
  //       dispatch(searchResults(response.data))
  //     })
  //     .catch( err => {
  //       console.error(err)
  //     });
  // };

  return (
    <MuiThemeProvider>
    <div id ='search' style={{alignContent: 'center', alignSelf: 'center', position: 'relative', display: 'inline-flex', float: 'center'}}>
      <DropDownMenu
        id='search-dropdown'
        value={search.language}
        onChange={(event, index, value) => dispatch(searchTerm({language: value}))}
        autoWidth={true}
      >
        <MenuItem value={'JavaScript'} primaryText="JavaScript" default />
        <MenuItem value={'Python'} primaryText="Python" />
        <MenuItem value={'Ruby'} primaryText='Ruby' />
        <MenuItem value={'HTML'} primaryText='HTML/CSS' />
        <MenuItem value={'Swift'} primaryText="Swift" />
        <MenuItem value={'Objective-C'} primaryText="Objective-C" />
        <MenuItem value={'Java'} primaryText="Java" />
      </DropDownMenu>
      <AutoComplete
        style={{alignSelf: 'center'}}
        hintText="What would you like to learn today?"
        searchText={search.term}
        onUpdateInput={e => dispatch(searchTerm({term: e}))}
        dataSource={topics}
        filter={AutoComplete.caseInsensitiveFilter}
        openOnFocus={true}
      />
      <Link className="searching" to="/results">
        <RaisedButton
        label="Let's go!"
        secondary={true}
        style={{margin: 12}}
        onClick={() => handleSearch(search, dispatch)}
        />
      </Link>
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

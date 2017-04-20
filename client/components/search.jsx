// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

// ACTIONS AND HELPERS
import { handleSearch } from '../helpers/searchHelpers.js';
import { searchTerm } from '../actions/index.js';

import Topics from './topics.jsx';

const Search = ({ search, dispatch }) => (
  <MuiThemeProvider>
    <div id="search" style={{ alignContent: 'center', alignSelf: 'center', position: 'relative', display: 'inline-flex', float: 'center' }}>
      <DropDownMenu
        id="search-dropdown"
        value={search.language}
        onChange={(event, index, value) => dispatch(searchTerm({ language: value }))}
        autoWidth
      >
        <MenuItem value={'JavaScript'} primaryText="JavaScript" default />
        <MenuItem value={'Python'} primaryText="Python" />
        <MenuItem value={'Ruby'} primaryText="Ruby" />
        <MenuItem value={'HTML'} primaryText="HTML/CSS" />
        <MenuItem value={'Swift'} primaryText="Swift" />
        <MenuItem value={'Objective-C'} primaryText="Objective-C" />
        <MenuItem value={'Java'} primaryText="Java" />
      </DropDownMenu>
      <AutoComplete
        style={{ alignSelf: 'center' }}
        hintText="What would you like to learn today?"
        searchText={search.term}
        onUpdateInput={e => dispatch(searchTerm({ term: e }))}
        dataSource={Topics}
        maxSearchResults={6}
        filter={AutoComplete.caseInsensitiveFilter}
        openOnFocus
      />
      <RaisedButton
        label="Let's go!"
        secondary
        style={{ margin: 12 }}
        onClick={() => handleSearch(search, dispatch)}
      />
    </div>
  </MuiThemeProvider>
  );

const mapStateToProps = state => ({
  search: state.search,
});

export default connect(mapStateToProps)(Search);

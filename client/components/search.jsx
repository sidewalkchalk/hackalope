// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';

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

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  state = {
   searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
     searchText: searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
     searchText: '',
    });
  };

  style = {
    margin: 12,
  };

  render() {
    return (
      <MuiThemeProvider>
      <div id ='search'>
        <DropDownMenu
          id='search-dropdown'
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
        >
          <MenuItem value={1} primaryText="JavaScript" />
          <MenuItem value={2} primaryText="Swift" />
          <MenuItem value={3} primaryText="Objective-C" />
          <MenuItem value={4} primaryText="Java" />
          <MenuItem value={5} primaryText="Python" />
        </DropDownMenu>
        <AutoComplete
          hintText="What would you like to learn today?"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={topics}
          filter={AutoComplete.caseInsensitiveFilter}
          openOnFocus={true}
          onNewRequest={() => {alert("You selected me!")}}
        />
        <RaisedButton
        label="Let's go!"
        secondary={true}
        style={this.style}
        containerElement={<Link to="/results" />}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}

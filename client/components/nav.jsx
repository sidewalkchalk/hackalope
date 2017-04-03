import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './login.jsx';

injectTapEventPlugin();

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

	render() {
    return (
      <div>
        <AppBar
          title="hackalope.io"
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />
      </div>
		);
	}


}

export default Nav;

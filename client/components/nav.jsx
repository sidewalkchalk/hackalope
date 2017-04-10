// Required React Components
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Required Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Required Modules
import Login from './login.jsx';
import LoggedInMenu from './loggedinmenu.jsx';
import LoggedOutMenu from './loggedoutmenu.jsx';

injectTapEventPlugin(); // Initialize Tap/Click Events

const Nav = ({user, dispatch}) => {

  return (
    <MuiThemeProvider>
    <div>
      <AppBar
        title={<Link style={{"color": "inherit", "textDecoration": "none"}} to='/'>hackalope.io</Link>}
        iconElementRight={user._id ? <LoggedInMenu /> : <LoggedOutMenu />}
      />
    </div>
    </MuiThemeProvider>
	);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    dialogs: state.dialogs
  };
};

export default connect(mapStateToProps)(Nav)

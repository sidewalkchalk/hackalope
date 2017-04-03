import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class Nav extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
    return (
      <AppBar
        title="Hackalope"
      />
		);
	}


}

export default Nav;

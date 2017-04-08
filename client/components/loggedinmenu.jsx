import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

const LoggedInMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement= {
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="My Profile" />
    <MenuItem primaryText="Sign Out" />
  </IconMenu>
);

LoggedInMenu.muiName = 'IconMenu';

export default LoggedInMenu;

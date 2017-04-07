import React from 'react';

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

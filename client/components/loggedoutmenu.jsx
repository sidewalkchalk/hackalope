import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const LoggedOutMenu = () => {
  return (
    <div>
      <RaisedButton label="Sign Up" secondary={true} style={{margin: 12}} />
      <RaisedButton label="Sign In" secondary={true} style={{margin: 12}} />
    </div>
  );
}

export default LoggedOutMenu;

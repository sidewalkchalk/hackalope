import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { handleSignUpOpen, handleLoginOpen } from '../helpers/helpers.js'

const LoggedOutMenu = ({dispatch}) => {

  return (
    <div>
      <RaisedButton
        label="Sign Up"
        secondary={true}
        style={{margin: 12}}
        onTouchTap={() => handleSignUpOpen(dispatch)}
      />

      <RaisedButton label="Sign In"
        secondary={true}
        style={{margin: 12}}
        onTouchTap={() => handleLoginOpen(dispatch)} />
    </div>
  );
}

export default connect()(LoggedOutMenu);

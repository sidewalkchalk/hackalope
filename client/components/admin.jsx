// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { checkAvatar } from '../helpers/helpers';
import { renderUnapproved } from '../helpers/adminHelpers';

// COMPONENTS
import UnapprovedResource from './unapprovedResource.jsx'

// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Admin = ({ unapproved, dispatch }) => {
  return unapproved.length ? (
    <div>
        <h4 style={{ fontFamily: 'Roboto' }}>Administration Panel</h4>
        <ul style={{ listStyleType: 'none' }}>
          {renderUnapproved(unapproved)}
        </ul>
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  unapproved: state.unapproved,
});

export default connect(mapStateToProps)(Admin);

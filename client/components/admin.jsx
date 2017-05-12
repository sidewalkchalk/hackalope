// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { renderUnapproved } from '../helpers/adminHelpers';

// COMPONENTS
import UnapprovedResource from './unapprovedResource.jsx';

// Styles
import { adminStyles } from '../assets/harryStyles';

const Admin = ({ unapproved, dispatch }) => unapproved.length ? (
  <div style={adminStyles.div}>
    <h4 style={adminStyles.h4}>Pending Submissions:</h4>
    <ul style={adminStyles.ul}>
      {renderUnapproved(unapproved)}
    </ul>
  </div>
  ) : (
    <div style={adminStyles.div}>
      <h4 style={adminStyles.h4}>Pending Submissions:</h4>
    </div>
  );

const mapStateToProps = state => ({
  unapproved: state.unapproved,
});

export default connect(mapStateToProps)(Admin);

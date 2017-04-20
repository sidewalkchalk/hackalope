// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// ACTIONS AND HELPERS
import { renderUnapproved } from '../helpers/adminHelpers';

const Admin = ({ unapproved, dispatch }) => unapproved.length ? (
  <div style={{ paddingLeft: '20' }}>
    <h4 style={{ fontFamily: 'Roboto' }}>Administration Panel</h4>
    <ul style={{ listStyleType: 'none' }}>
      {renderUnapproved(unapproved)}
    </ul>
  </div>
  ) : null;

const mapStateToProps = state => ({
  unapproved: state.unapproved,
});

export default connect(mapStateToProps)(Admin);

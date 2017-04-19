import * as actions from '../actions/index.js';
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export const checkImgIcon = (result) => {
  if (!result.image) {
    const letter = result.title.charAt(0).toUpperCase();
    return (
      <div style={{ background: 'rgb(188, 188, 188)', width: 40, height: 40, lineHeight: '40px', textAlign: 'center' }}>
        <font color="white" size="5">
          {letter}
        </font>
      </div>
    );
  }
  return <img src={`${result.image}`} width="40" />;
};


export const submitProgress = (submission) => {
  if (submission.loading) {
    return (
      <div style={{ paddingTop: 10 }}>
        <LinearProgress mode="indeterminate" />
      </div>
    );
  }
};

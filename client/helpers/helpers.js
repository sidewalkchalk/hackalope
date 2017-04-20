import LinearProgress from 'material-ui/LinearProgress';
import React from 'react';

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
  return <img src={`${result.image}`} alt={`${result.title}`} width="40" />;
};

export const checkAvatar = (user) => {
  if (!user.avatar) {
    const letter = user.name.charAt(0).toUpperCase() || user.username.charat(0).toUpperCase();
    return (
      <span
        style={{
          position: 'absolute',
          borderRadius: '50%',
          background: 'rgb(188, 188, 188)',
          width: 40,
          height: 40,
          lineHeight: '40px',
          textAlign: 'center',
        }}
      >
        <font color="white" size="5">
          {letter}
        </font>
      </span>
    );
  }
  return (
    <span>
      <img
        src={`${user.avatar}`}
        width="40"
        alt="user avatar"
        style={{
          position: 'absolute',
          borderRadius: '50%',
        }}
      />
    </span>
  );
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

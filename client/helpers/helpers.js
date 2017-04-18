import * as actions from '../actions/index.js';
import React from 'react';

// displays either avatar or first initial
export const checkImgIcon = result => {
  if (!result.image) {
    let letter = result.title.charAt(0).toUpperCase();
    return (
      <div style={{background: "rgb(188, 188, 188)", width: 40, height: 40, lineHeight: '40px', textAlign: 'center'}}>
        <font color='white' size='5'>
          {letter}
        </font>
      </div>
    )
  } else {
    return <img src={`${result.image}`} width="40"/>
  }
}

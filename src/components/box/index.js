import React from 'react';

import './Box.css'

export default (props) => {

  return(
    <div className='Box'>
      <div className='BoxHeaderArea'>
        <h3 className='BoxHeader'>{props.head}</h3>
      </div>
      <p className='BoxText'>{props.body}</p>
    </div>
  );
}
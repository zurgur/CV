import React from 'react';

import './InfoSwitcher.css';


export default () => {

  const change = () => {
    return (e) => {
      console.info(e);
    }
  }

  return (
    <div className='switchButtons'>
      <button className='UnCheckButton' onClick={change}>CV</button>
      <button className='CheckButton'>Portfolio</button>
    </div>
  );

}
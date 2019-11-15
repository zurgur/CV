import React from 'react';

import Activity from '../activity';
import './Schools.css';

export default (props) => {
  return(
    <div className='skolar'>
      <h1 className='department'>{props.name}</h1>
      <Activity info={props.info} />
    </div>
  );
}
import React from 'react';

import Activity from '../activity';
import './Jobs.css';

export default (props) => {
    return (
      <div className='jobs'>
        <h1 className='department'>{props.name}</h1>
        <Activity info={props.info} />
      </div>
    );
}
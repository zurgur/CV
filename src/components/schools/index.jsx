import React from 'react';

import Activity from '../activity';
import './Schools.css';

export default (props) => {
  const { name, info } = props;
  return (
    <div className="skolar">
      <h1 className="department">{name}</h1>
      <Activity info={info} />
    </div>
  );
};

import React from 'react';

import Activity from '../activity';
import './Jobs.css';

export default (props) => {
  const { name, info } = props;
  return (
    <div className="jobs">
      <h1 className="department">{name}</h1>
      <Activity info={info} />
    </div>
  );
};

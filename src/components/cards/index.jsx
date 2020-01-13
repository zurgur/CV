import React from 'react';

import './Cards.css';

export default (props) => {
  const { info } = props;

  return (
    <div className="Cards">
      {info.map((i) => (
        <div key={i.name} className="container">
          <div className="inner">
            <a href={i.page} className="box">
              <h1>{i.name}</h1>
              <p>{i.tittle}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

import React from 'react';

import './Activity.css';

export default (props) => {
  const about = props.info;
  return (
    <div className='about'>
      {about.map((thing) => (
        <div className='currentAct' key={thing.tittle}>
          <div className='Actnames'>
            <div className='titleAndInf'>
              <h2 className='title'>{thing.tittle}</h2>
              <p>{thing.date}</p>
              <p className='info'>{thing.info}</p>
            </div>
          </div>
        </div>
      ))}
      <hr className="style3"/>
    </div>
  )
}
import React from 'react';

import './Projects.css';


export default (props) => {
  const { pros, name } = props;
  return (
    <div className="progects">
      <h1>{name}</h1>
      {pros.map((pro) => (
        <div key={pro.tittle} className="pro">
          <a href={pro.git} className="git"><img src="GitHub-Mark-120px-plus.png" className="headImg" alt="github" /></a>
          <h3>{pro.tittle}</h3>
          <div className="texti"><p>{pro.text}</p></div>
          <div className="images">
            {pro.img ? pro.img.map((image) => (<img className="image" alt="verkefni mynd" src={image} key={image} />)) : <p />}
          </div>
        </div>
      ))}
    </div>
  );
};

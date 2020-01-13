import React from 'react';

import './Footer.css';

export default (props) => {
  const { name } = props;
  return (
    <div className="Footer">
      <h1 className="footer">{name}</h1>
      <div className="Footer-links">
        <a href="mailto:alexfreyrs@gmail.com?Subject=Hello%20again"><img src="email.png" alt="email" className="email" /></a>
        <a href="https://github.com/zurgur" className="git"><img src="GitHub-Mark-120px-plus.png" className="email" alt="github" /></a>
        <a href="https://www.linkedin.com/in/alexander-sveinsson-a36715139/" className="ln"><img src="In-2C-128px-TM.png" className="email" alt="linkedinn" /></a>
      </div>
    </div>
  );
};

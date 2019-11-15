import React, { Component } from 'react';

import Box from '../box';
import './Skills.css'


export default (props) => {
  const skillsIS = [
    {
      title: 'Forritunarmál',
      body: 'Python, javascript, C#, Java, C++, R'
    },
    {
      title: 'Vefforritun',
      body: 'CSS, HTML, Node, React, npm, Express'
    },
    {
      title: 'Tölvuleikjaforritun',
      body: 'Unity, HTLM canvas, unreal engine'
    }, 
    {
      title: 'App forritun',
      body: 'Android native, React native'
    }
  ]
  const skillsEN = [
    {
      title: 'Programming languages',
      body: 'Python, javascript, C#, Java, C++, R'
    }, {
      title: 'Web programming',
      body: 'CSS, HTML, Node, React, npm, Express'
  }, {
      title: 'Game development',
      body: 'Unity, HTLM canvas, unreal engine'
  }, {
      title: 'App programing',
      body: 'Android native, React native'
  }
  ]
        
  return(
    <div>
      <h1 className='skillText'>{props.name}</h1>
      <div className='skills'>
  
          { props.ln === 'is' ? skillsIS.map((i) => (
              <Box head={i.title} body={i.body} key={i.title}/>
          )
          ) : skillsEN.map((i) => (
              <Box head={i.title} body={i.body} key={i.title}/>
          )
          )}
      </div>
      <hr className="style3"/>
    </div>
  );
}
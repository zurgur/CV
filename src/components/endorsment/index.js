import React from 'react';

import Cards from '../cards';

export default (props) => {
  const a = [
    {name: "Ebba Þóra Hvannberg, Ph.D.",
    tittle: 'Prófesor í tölvunarfræði',
    page: 'https://www.hi.is/staff/ebba',
    docs:"https://drive.google.com/file/d/1bDfnC663sjqqa9OKt4SmEiL-b51F9dFU/view?usp=sharing",},
    {name: "Kári Aðalsteinsson",
    tittle: 'Garðyrkjustjóri KGRP,',
    page: 'http://www.kirkjugardar.is/sida.php?id=165&width=1920&height=1080',
    docs: "https://drive.google.com/open?id=1qSr32EXP73m0eNgz2XX1UHpGkewO6bAY",},
    {name: "Steinn Guðmundsson",
    tittle: 'Prófesor í tölvunarfræði',
    page: 'https://www.hi.is/staff/steinng'},
  ];

  return(
    <div className='endorsment'>
      <h1 className='department'>{props.name}</h1>
      <Cards info={a} />
    </div>
  );
}
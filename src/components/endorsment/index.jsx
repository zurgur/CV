import React from 'react';

import Cards from '../cards';

export default (props) => {
  const endorsments = [
    {
      name: 'Ebba Þóra Hvannberg, Ph.D.',
      tittle: 'Prófesor í tölvunarfræði',
      page: 'https://www.hi.is/staff/ebba',
      docs: 'https://drive.google.com/file/d/1bDfnC663sjqqa9OKt4SmEiL-b51F9dFU/view?usp=sharing',
    },
    {
      name: 'Bjarki Gunnarsson',
      tittle: 'Solutions Arcitect',
      page: 'https://www.linkedin.com/in/bjarki-gunnarsson-428676121/',
    },
    // {
    //   name: 'Kári Aðalsteinsson',
    //   tittle: 'Garðyrkjustjóri KGRP,',
    //   page: 'http://www.kirkjugardar.is/sida.php?id=165&width=1920&height=1080',
    //   docs: 'https://drive.google.com/open?id=1qSr32EXP73m0eNgz2XX1UHpGkewO6bAY',
    // },
    {
      name: 'Steinn Guðmundsson',
      tittle: 'Prófesor í tölvunarfræði',
      page: 'https://www.hi.is/staff/steinng',
    },
  ];

  const { name } = props;

  return (
    <div className="endorsment">
      <h1 className="department">{name}</h1>
      <Cards info={endorsments} />
    </div>
  );
};

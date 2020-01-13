import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import Header from './components/header';
import Jobs from './components/jobs';
import School from './components/schools';
import Projects from './components/progjects';
import Endorsment from './components/endorsment';
import Footer from './components/footer';
// import Skills from './components/skills';

const App = () => {
  const [lang, setLang] = useState('en');

  const prosIS = [
    {
      tittle: 'Laxness',
      git: 'https://github.com/mimiqkz/Laxness',
      img: ['laxness1.png', 'laxness2.png'],
      text: 'Vann að þessu verkefni í samstarfi við safnið Gljúfrastein. Það var mjög góð reynsla að vinna með viðskiptavini og koma hugmyndum okkar saman. Forritið er app sem upprunalega var gert í Android native, en seinna færðum við það í react native.',
    },
    {
      tittle: 'k-assistant',
      img: ['kassistant1.png', 'kassistant2.png', 'kassistant3.png'],
      git: 'https://github.com/mimiqkz/kassistant',
      text: 'Verkefni fyrir hugbúnaðarðarverkefni 1 var gert með Spring boot og með Postgress gagnagrunni. Hlutverk mitt var aðallega í bakendanum, gera gagnagrunn með AWS og tengja framenda við bakenda.',
    },
    {
      tittle: 'ArenaFighter',
      img: ['arena1.png', 'StartScreen.png'],
      git: 'https://github.com/zurgur/ArenaFighter',
      text: 'Lokaverkefni í tölvuleikjaforritun þar sem við fengum að leika lausum hala og gera það sem okkur datt í hug. Leikurinn er 2D bardagaleikur gerður með JavaScript og html. Grafíkin er okkar eigin',
    },
    {
      tittle: 'BASH',
      img: ['7Frapp1.PNG', '7Frapp3.PNG', '7Frapp2.PNG'],
      git: 'https://github.com/zurgur/7Frapp',
      text: 'Verkefni í þróun hugbúnaðar. Forritið er gert með það í huga að geta pantað flug og séð upplýsingar um þau flug sem notandi hefur keypt sér. Gert í JavaFX með SQLite gagnagrunni. Ég vann í að leita að og panta flug.',
    },
    {
      tittle: 'React CV',
      git: 'https://github.com/zurgur/CV',
      text: 'Verkefni sem ég nýtti kunnátu mína um Vefforritun sem ég hef öðlast í námi. Gert með ReactJS, Javascript, HTML5 og CSS3',
    },
  ];
  const prosEN = [
    {
      tittle: 'Laxness',
      git: 'https://github.com/mimiqkz/Laxness',
      img: ['laxness1.png', 'laxness2.png'],
      text: 'Worked on this project in collaboration with Gljúfrastein good experience to learn how to work with a customer. The project was originally made in android native but we later decided to port it over to react native.',
    },
    {
      tittle: 'k-assistant',
      img: ['kassistant1.png', 'kassistant2.png', 'kassistant3.png'],
      git: 'https://github.com/mimiqkz/kassistant',
      text: 'A project made in software engineering class 1 made with Spring boot and with a Postgres database. my main job was to make the back end, make the database with AWS and connect it to the front end.',
    },
    {
      tittle: 'ArenaFighter',
      img: ['arena1.png', 'StartScreen.png'],
      git: 'https://github.com/zurgur/ArenaFighter',
      text: 'Project for Computer gaming class where we got to make any game we wanted. the game is a 2D fighter made with Javascript and HTML.',
    },
    {
      tittle: 'BASH',
      img: ['7Frapp1.PNG', '7Frapp3.PNG', '7Frapp2.PNG'],
      git: 'https://github.com/zurgur/7Frapp',
      text: 'Project in software development. The program is done with the purpose of being expandable to order flights and see information about the flights That the user has Purchased. Done in JavaFX with SQLite database. I worked looking for and ordering flights.',
    },
    {
      tittle: 'React CV',
      git: 'https://github.com/zurgur/CV',
      text: 'A project where I used my knowledge of Web-development that I have learnt in school. Made with ReactJS Javascript, HTML5 and CSS3',
    },
  ];
  const schoolIs = [{ tittle: 'Háskóli Íslands', date: '2016 - 2018', info: 'Tölvunarfræði' }];
  const schoolEn = [{ tittle: 'University of Iceland', date: '2016 - 2018', info: 'Computer science' }];
  const jobsIs = [
    {
      tittle: 'Forritari  hjá Annata',
      date: '2018 - ',
      info: 'Ég vinn sem hluti af nýsköpunarteymi Annata. Lausnirnar sem við vinnum með eru búnar til fyrir Microsoft Dynamics ásamt sérsniðnum veflausnum, þar i meðal React.',
    },
    {
      tittle: 'Dæmatíma kennari við Háskóla Íslands',
      date: '2018',
      info: 'Kenndi stærðfræði og reiknifræði við Háskóla Íslands',
    },
  ];

  const jobsEn = [
    {
      tittle: 'Developer at Annata',
      date: '2018 - ',
      info: 'I work as a part of an innovation team. The solutions we work with are all created for the Microsoft Dynamics platform along with custom web solutions, including React.',
    },
    {
      tittle: 'Assistant teacher at University of Iceland',
      date: '2018',
      info: 'Assistant teacher in Mathematics and calculus',
    },
  ];

  const switchLang = () => {
    const newLang = lang === 'is' ? 'en' : 'is';
    setLang(newLang);
  };

  return (
    <main className="App">
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      <Helmet>
        <title>Alexander</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <Header switchLan={switchLang} lan={lang} />
      <Jobs
        name={lang === 'is' ? 'Vinna' : 'Work'}
        info={lang === 'is' ? jobsIs : jobsEn}
      />
      <School
        name={lang === 'is' ? 'Menntun' : 'Education'}
        info={lang === 'is' ? schoolIs : schoolEn}
      />
      {/* <Skills name={lang === 'is' ? 'Hæfni' : 'Skills'} ln={lang} /> */}
      <Projects
        pros={lang === 'is' ? prosIS : prosEN}
        name={lang === 'is' ? 'Verkefni' : 'Projects'}
      />
      <Endorsment name={lang === 'is' ? 'Meðmælendur' : 'Referrals'} />
      <Footer name={lang === 'is' ? 'Hafðu samband' : 'Be in touch'} />
    </main>
  );
};

export default App;

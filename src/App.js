import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';

import Header from './components/header';
import Jobs from './components/jobs';
import School from './components/schools';
import Projects from './components/progjects';
import Endorsment from './components/endorsment';
import Footer from './components/footer'

class App extends Component {

  state = {

    lang: 'is',

    prosIS : [
      {tittle:'Laxness',
      git:'https://github.com/mimiqkz/Laxness',
      img: ['laxness1.png','laxness2.png'],
      text: 'van að þessu verkefni í samtarfi við safnið Gljúfrastein en það er mjög góð reynsla að vinna með kúnna og reyna að koma hugmyndum okkar saman. Forritið er app sem uprunarlega var gert í Android native, en seins færðum við það í react native.'},
      {tittle: 'k-assistant',
      img: ['kassistant1.png','kassistant2.png','kassistant3.png'],
      git:'https://github.com/mimiqkz/kassistant',
      text: 'verkefni fyrir hugbúnaðarðarverkefni 1 var gert með Spring boot og með Postgress gagnagrunni. Hlutverk mitt var aðallega í bakendanum, gera gagnagrunn með AWS og tengja framenda við bakenda.'},
      {tittle: 'ArenaFighter',
      img: ['arena1.png','StartScreen.png'],
      git:'https://github.com/zurgur/ArenaFighter',
      text: 'lokaverkefni í tölvuleikjaforritun þar sem við fengum að leika lausum hala og gera það sem okkur datt í hug. Leikurinn er 2D bardagaleikur gerður með Javasqript og html og grafíkin er okkar eigin en hægt er að spila hann hér'},
      {tittle:'7Frapp',
      git:'https://github.com/zurgur/7Frapp',
      text: 'verkefni í þróun hugbúnaðar. Forritið er gert með það í huga að geta pantað flug og séð upplýsingar um þau flug sem notandi hefur keypt sér. Gert í JavaFX með SQLite gagnagrunni. Ég vann í að leita að og panta flug.'},
      {tittle:'Paint-netbeans',
      git:'https://github.com/zurgur/Paint-netbeans',
      img: ['paint.png'],
      text: 'verkefni í viðmótsforritun gert í Java swing. Forritið var einstaklingsverkefni á fyrsta ári tölvunarfræðinnar en það fékk góðar viðtökur og ég lærði mikið af því. Þetta er einfalt forrit til þess að teikna myndir og vista þær á harðadisk tölvunnar'},
  ],
  prosEN :  [
    {tittle:'Laxness',
    git:'https://github.com/mimiqkz/Laxness',
    img: ['laxness1.png','laxness2.png'],
    text: 'worked on this project in collaboration with Gljúfrastein good experience to learn how to work with a customer. The project was originally made in android native but we later decided to port it over to react native.'},
    {tittle: 'k-assistant',
    img: ['kassistant1.png','kassistant2.png','kassistant3.png'],
    git:'https://github.com/mimiqkz/kassistant',
    text: 'A project made in software engineering class 1 made with Spring boot and with a Postgres database. my main job was to make the back end, make the database with AWS and connect it to the front end.'},
    {tittle: 'ArenaFighter',
    img: ['arena1.png','StartScreen.png'],
    git:'https://github.com/zurgur/ArenaFighter',
    text: 'project for Computer gaming class where we got to make any game we wanted. the game is a 2D fighter made with Javascript and HTML.'},
    {tittle:'7Frapp',
    git:'https://github.com/zurgur/7Frapp',
    text: 'project in software development. The program is done with the purpose of being expandable to order flights and see information about the flights That the user has Purchased. Done in JavaFX with SQLite database. I worked looking for and ordering flights.'},
    {tittle:'Paint-netbeans',
    git:'https://github.com/zurgur/Paint-netbeans',
    img: ['paint.png'],
    text: 'a project in interface programming done in Java Swing. The program was an individual project during the first year of computer science, but it received a good reception and I learned a lot from it. This is a simple application to draw images and save them to your hard drive'},
  ],
  schoolIs : [
    {tittle: "Háskóli Íslands",
            date: '2016 - 2018',
            info: 'Tölvunar fræði'},
  ],
  schoolEn : [
    {tittle: "University of Iceland",
            date: '2016 - 2018',
            info: 'Computer science'},
  ],
  jobsIs : [
    {tittle: "Dæmatíma kennari",
    date: '2018',
    info: 'kenndi stærðfræði og reiknifræði'},
    {tittle: "Vélarmaður / Sumarstarfstaður",
    date: '2011 - 2017',
    info: 'vann sem vélar maður'}
  ],
  jobsEn : [{tittle: "Assistant teacher",
  date: '2018',
  info: 'Assistant teacher in Mathematics and calculus'},
  {tittle: "Machine operator",
  date: '2011 - 2017',
  info: 'During 3 months each summer'}
],
  }

  switchLang = () => {
    return (e) => {
      const newLang = this.state.lang === 'is' ? 'en' : 'is';
      console.info(newLang);
      this.setState({lang : newLang});
    }
  }
  
  render() {
    return (
      <main className="App">
        <Helmet>
          <title>Alexander</title>
          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        </Helmet>
        <Header switchLan={this.switchLang()} lan={this.state.lang}/>
        <School name={this.state.lang === 'is' ? 'Menntun' : 'Education'}
          info={this.state.lang === 'is' ? this.state.schoolIs : this.state.schoolEn} />
        <Jobs name = {this.state.lang === 'is' ? 'Vinna' : 'Work'}
          info={this.state.lang === 'is' ? this.state.jobsIs : this.state.jobsEn}/>
        <Projects pros={this.state.lang === 'is' ? this.state.prosIS : this.state.prosEN}
            name={this.state.lang === 'is' ? 'Verkefni' : 'Projects'}/>
        <Endorsment name = {this.state.lang === 'is' ? 'Meðmælendur' : 'Referrals'}/>
        <Footer name={this.state.lang === 'is' ? 'Hafðu samband': 'Be in touch'}/>
      </main>
    );
  }
}

export default App;

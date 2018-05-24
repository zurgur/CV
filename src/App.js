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
  render() {
    return (
      <main className="App">
        <Helmet>
          <title>Alexander</title>
          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        </Helmet>
        <Header />
        <School />
        <Jobs />
        <Projects />
        <Endorsment />
        <Footer />
      </main>
    );
  }
}

export default App;

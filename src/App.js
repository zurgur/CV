import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Jobs from './components/jobs';
import School from './components/schools';
import Projects from './components/progjects';
import About from './components/about';
import Endorsment from './components/endorsment';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <About />
        <School />
        <Jobs />
        <Projects />
        <Endorsment />
      </main>
    );
  }
}

export default App;

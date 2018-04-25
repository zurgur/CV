import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Jobs from './components/jobs';
import School from './components/schools';
import Projects from './components/progjects';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <About />
        <School />
        <Jobs />
        <Projects />
      </main>
    );
  }
}

export default App;

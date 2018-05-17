import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section componentName = "title" />
        <Section componentName = "contact" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Intro from './components/intro'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;

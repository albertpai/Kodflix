import React, { Component } from 'react';
import A_city_of_sadness from './A_city_of_sadness.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={A_city_of_sadness} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React for the first time hellooooo thereee!!</h1>
        </header>
        <p className="App-intro">
          <img src={A_city_of_sadness} alt="Logo" width="100%" />
        </p>
      </div>
    );
  }
}

export default App;

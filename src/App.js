import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery.js';


// The same as  exort defailt App;
export default class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Kodflix</h1>
        </header>

        <Gallery />

      </div>

    );
  }
}

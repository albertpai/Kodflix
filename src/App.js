import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Sadness from './A_City_of_Sadness.jpg';
import Games from './Games_of_Thrones.jpg';
import House from './House_of_Cards.jpg';
import Robin from './Robin_Hood.jpg';
import Sherlock from './Sherlock.jpg';
import Breaking from './Breaking_Bad.jpg';
import PosterComponent from './Poster_component.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Kodflix</h1>
        </header>

        <div className="poster-container">
          <PosterComponent posterTitle="A City of Sadness" imageName={Sadness} />;
          <PosterComponent posterTitle="Games of Thrones" imageName={Games} />;
          <PosterComponent posterTitle="House of Cards" imageName={House} />;
        </div>
        <div className="poster-container">
          <PosterComponent posterTitle="Robin Hood" imageName={Robin} />;
          <PosterComponent posterTitle="Sherlock" imageName={Sherlock} />;
          <PosterComponent posterTitle="Breaking Bad" imageName={Breaking} />;
        </div>
      </div>
    );
  }
}

export default App;
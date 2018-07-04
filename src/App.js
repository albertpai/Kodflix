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

// The same as  exort defailt App;
export default class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Kodflix</h1>
        </header>

        <div className="poster-container">
          <PosterComponent posterTitle="A City of Sadness" src={Sadness} alt={Sadness} />;
          <PosterComponent posterTitle="Games of Thrones" src={Games} alt={Sadness} />;
          <PosterComponent posterTitle="House of Cards" src={House} alt={Sadness} />;
        </div>
        <div className="poster-container">
          <PosterComponent posterTitle="Robin Hood" src={Robin} alt={Sadness} />;
          <PosterComponent posterTitle="Sherlock" src={Sherlock} alt={Sadness} />;
          <PosterComponent posterTitle="Breaking Bad" src={Breaking} alt={Sadness} />;
        </div>
      </div>
    );
  }
}

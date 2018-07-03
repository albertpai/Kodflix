import React, { Component } from 'react';
// import logo from './logo.svg';
import A_City_of_Sadness from './A_City_of_Sadness.jpg';
import Games_of_Thrones from './Games_of_Thrones.jpg';
import House_of_Cards from './House_of_Cards.jpg';
import Robin_Hood from './Robin_Hood.jpg';
import Sherlock from './Sherlock.jpg';
import Breaking_Bad from './Breaking_Bad.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Kodflix</h1>
        </header>
        {/* <p className="App-intro">
          These are the posters of my favourite Movies and TV shows!
        </p> */}
        <div className="poster-container">
          <div className="poster-image">
            <img src={A_City_of_Sadness} alt="A_City_of_Sadness"/>
            <div className="title-overlay">
              <h1>A City of Sadness Sadness Sadness</h1>
            </div> 
          </div>
          <div className="poster-image">
            <img src={Games_of_Thrones} alt="Games_of_Thrones" />
            <div className="title-overlay">
              <h1>Games of Thrones</h1>
            </div>             
            </div>
          <div className="poster-image">
            <img src={House_of_Cards} alt="House_of_Cards" />
            <div className="title-overlay">
              <h1>House of Cards</h1>
            </div>
          </div>
        </div>
        <div className="poster-container">
          <div className="poster-image">
            <img src={Robin_Hood} alt="Robin_Hood" />
            <div className="title-overlay">
              <h1>Robin Hood</h1>
            </div>
          </div>
          <div className="poster-image">
            <img src={Sherlock} alt="Sherlock" />
            <div className="title-overlay">
              <h1>Sherlock</h1>
            </div>
          </div>
          <div className="poster-image">
            <img src={Breaking_Bad} alt="Breaking_Bad" />
            <div className="title-overlay">
              <h1>Breaking Bad</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
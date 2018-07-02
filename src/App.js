import React, { Component } from 'react';
import logo from './logo.svg';
// import A_City_of_Sadness from './A_City_of_Sadness.jpg';
// import Games_of_Thrones from './Games_of_Thrones.jpg';
// import House_of_Cards from './House_of_Cards.jpg';
// import Robin_Hood from './Robin_Hood.jpg';
// import Sherlock from './Sherlock.jpg';
// import Breaking_Bad from './Breaking_Bad.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React for the first time hellooooo thereee!!</h1>
        </header>
        <p className="App-intro">
          These are the posters of my favourite Movies and TV shows!
        </p>
        <div className="poster-container">
          <div className="poster-title">A City of Sadness</div>
          <div className="poster-title">Games of Thrones</div>
          <div className="poster-title">House of Cards</div>
        </div>
        <div className="poster-container">
          <div className="poster-title">Robin Hood</div>
          <div className="poster-title">Sherlock</div>
          <div className="poster-title">Breaking Bad</div>
          {/* <img src={A_City_of_Sadness} alt="A_City_of_Sadness" width="100%" />
          <img src={Games_of_Thrones} alt="Games_of_Thrones" width="100%" />
          <img src={House_of_Cards} alt="House_of_Cards" width="100%" />
          <img src={Robin_Hood} alt="Robin_Hood" width="100%" />
          <img src={Sherlock} alt="Sherlock" width="100%" />
          <img src={Breaking_Bad} alt="Breaking_Bad" width="100%" /> */}
        </div>
      </div>
    );
  }
}

export default App;

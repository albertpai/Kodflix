import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from './Details.js';

// The same as  exort defailt App;
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route path="/:id" component={Details} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
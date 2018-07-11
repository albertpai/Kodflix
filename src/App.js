import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gallery from './Gallery/Gallery.js';
import Details from './Details/Details.js';
import NotFound from './NotFound/NotFound.js';

// The same as  exort defailt App;
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/:id" component={Details} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
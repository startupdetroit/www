import React, { Component } from 'react';
import ReactGA from 'react-ga';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-54114923-3');
    ReactGA.pageview('/');
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

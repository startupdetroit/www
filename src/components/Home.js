import React, { Component } from 'react';
import Hero from './Hero';
import GetInvolved from './GetInvolved';
import Community from './Community';
import About from './About';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <GetInvolved />
        <Community />
        <About />
      </div>
    );
  }
}

export default Home;

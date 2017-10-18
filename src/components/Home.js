import React, { Component } from 'react';
import Hero from './Hero';
import GetInvolved from './GetInvolved';
import Community from './Community';
import About from './About';

import styled from 'styled-components';

const HomeComponent = styled.div`
  padding-top: 56px;
`;

class Home extends Component {
  render() {
    return (
      <HomeComponent className="Home">
        <Hero />
        <GetInvolved />
        <Community />
        <About />
      </HomeComponent>
    );
  }
}

export default Home;

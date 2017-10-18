import React, { Component } from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
  padding-bottom: 3rem;
  background: transparent;
`;

class Footer extends Component {
  render() {
    return (
      <FooterComponent className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              {' '}
              Made with{' '}
              <span style={{ color: '#ff6032' }} className="heart">
                ♥
              </span>{' '}
              by <a href="https://tedserbinski.com/">Ted Serbinski</a> and{' '}
              <a href="http://www.shriyash.io/">Shriyash Jalukar</a> and{' '}
              <a href="http://mager.co">Andrew Mager</a> in Detroit, Michigan |{' '}
              <a href="https://github.com/startupdetroit/www">Fork me on Github</a>
            </p>
          </div>
        </div>
      </FooterComponent>
    );
  }
}

export default Footer;

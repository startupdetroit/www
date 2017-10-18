import React, { Component } from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
  padding-bottom: 3rem;
  background: #eee;
`;

const Heart = styled.span`
  font-size: 24px;
  color: #ff6032;
`;

class Footer extends Component {
  render() {
    return (
      <FooterComponent className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              {' '}
              Made with <Heart>♥</Heart> by{' '}
              <a href="https://tedserbinski.com/">Ted Serbinski</a>,{' '}
              <a href="http://www.shriyash.io/">Shriyash Jalukar</a>, {' '}
              <a href="http://mager.co">Andrew Mager</a>, and {' '}
              <a href="http://klsy.co/">Kelsey Trabue</a> in{' '}
              <strong>Detroit, MI</strong>.
            </p>
            <p>
              <span className="icon">
                <a href="https://github.com/startupdetroit/www">
                  <i className="fa fa-github fa-3x" aria-hidden="true" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </FooterComponent>
    );
  }
}

export default Footer;

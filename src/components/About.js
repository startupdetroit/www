import React, { Component } from 'react';

import Divider from './Divider';

class About extends Component {
  render() {
    return (
      <section className="About section" id="about">
        <div className="container">
          <Divider />

          <h3 className="title has-text-centered">What is this about?</h3>
          <div className="content has-text-centered">
            <p>
              #StartupDetroit is an{' '}
              <a
                href="https://github.com/startupdetroit/www"
                rel="noreferrer noopener"
                target="_blank"
              >
                open source approach
              </a>{' '}
              to building the Detroit Startup community.
            </p>
            <p>
              Communities thrive when the are they open and inclusive. Open
              source is an excellent model to make this work. This resource is for the community, by the community.
            </p>
            <p>
              #StartupDetroit is for the makers and doers. The investors and
              supporters. For those building innovation across metro Detroit. The startups, investors, and
              supporting organizations that want to see Detroit's startup community thrive.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

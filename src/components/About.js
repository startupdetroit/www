import React, { Component } from 'react';

import Divider from './Divider';

class About extends Component {
  render() {
    return (
      <section className="About section" id="about">
        <div className="container">
          <Divider />

          <h3 className="title has-text-centered">About</h3>
          <div className="content has-text-centered">
            <h4>
              #StartupDetroit is an{' '}
              <a
                href="https://github.com/startupdetroit/www"
                rel="noreferrer noopener"
                target="_blank"
              >
                open source approach
              </a>{' '}
              to building the Detroit Startup community.
            </h4>
            <p>
              Startup Detroit is for the makers, creators, investors, and
              supporters in the software and tech startup space building and
              investing in innovation in and around metro Detroit.
            </p>
            <p>
              Communities thrive when the are they open and inclusive. Open
              source is an excellent model to make this work.
            </p>
            <p>
              <em>
                Our goal with #StartupDetroit is to create a brand owned by the
                community, not owned by anyone or any organization.
              </em>
            </p>
            <p>
              To build an inclusive community, we want startups, investors, and
              supporting organziations and companies to be invited to
              participate. We do not want to limit participation by location.
              Rather, #StartupDetroit is for the startups, investors, and
              supporting organizations in Detroit, around metro Detroit, and
              around the world that want to see this region thrive.
            </p>
            <p>Thank you for your support!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

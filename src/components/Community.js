import React, { Component } from 'react';
import Logo from './Logo';

import Divider from './Divider';
import AddYourLogo from './AddYourLogo';

import {ORGANIZATIONS} from '../constants/organizations.js';

class Community extends Component {
  render() {
    return (

      <section className="section" id="community">

        <div className="container">
          <Divider />
          <h3 className="title has-text-centered">Community</h3>
          <div className="logos">

            {ORGANIZATIONS.map(({logo, location, website, name, type}) => {
              const props = {
                src: logo,
                location,
                href: website,
                name,
                type,
              }

              return <Logo key={name} {...props} />;
            })}

          </div>
          <AddYourLogo />
        </div>
      </section>
    );
  }
}

export default Community;

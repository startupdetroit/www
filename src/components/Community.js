import React, { Component } from 'react';
import Logo from './Logo';

import logoDVP from '../static/img/logos/logo-dvp.png';
import logoMapbox from '../static/img/logos/logo-mapbox.png';
import logoMVCA from '../static/img/logos/logo-mvca.png';
import logoTechstars from '../static/img/logos/logo-techstars.png';

class Community extends Component {
  render() {
    return (
      <section className="section" id="community">
        <h3 className="title">Community</h3>
        <div className="logos">
          <Logo
            src={logoDVP}
            location="Detroit, MI"
            href="http://detroit.vc"
            name="Detroit Venture Partners"
            type="Investor"
          />
          <Logo
            src={logoMVCA}
            location="Ann Arbor, MI"
            href="http://michiganvca.org"
            name="Michigan Venture Capital Association"
            type="Investor"
          />
          <Logo
            src={logoMapbox}
            location="Detroit, MI"
            href="http://mapbox.com"
            name="Mapbox"
            type="Community Supporter"
          />
          <Logo
            src={logoTechstars}
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
            type="Investor"
          />
        </div>
      </section>
    );
  }
}

export default Community;

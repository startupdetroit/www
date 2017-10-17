import React, { Component } from 'react';
import Logo from './Logo';

import logoAmbassador from '../static/img/logos/logo-ambassador.png';
import logoBamboo from '../static/img/logos/logo-bamboo.png';
import logoDVP from '../static/img/logos/logo-dvp.png';
import logoMapbox from '../static/img/logos/logo-mapbox.png';
import logoMVCA from '../static/img/logos/logo-mvca.png';
import logoSkyspecs from '../static/img/logos/logo-skyspecs.png';
import logoTechstars from '../static/img/logos/logo-techstars.png';
import logoTrucks from '../static/img/logos/logo-trucks.png';

class Community extends Component {
  render() {
    return (
      <section className="section" id="community">
        <h3 className="title">Community</h3>
        <div className="logos">
          <Logo
            src={logoAmbassador}
            location="Birmingham, MI"
            href="http://getambassador.com"
            name="Ambassador"
            type="Startup"
          />
          <Logo
            src={logoBamboo}
            location="Detroit, MI"
            href="http://bamboodetroit.com"
            name="Bamboo Detroit"
            type="Startup"
          />
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
            src={logoSkyspecs}
            location="Detroit, MI"
            href="http://www.skyspecs.com"
            name="Skyspecs"
            type="Startup"
          />
          <Logo
            src={logoTechstars}
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
            type="Investor"
          />
          <Logo
            src={logoTrucks}
            location="Detroit, MI"
            href="http://trucks.vc"
            name="Trucks Venture Capital"
            type="Investor"
          />
        </div>
      </section>
    );
  }
}

export default Community;

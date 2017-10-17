import React, { Component } from 'react';
import Logo from './Logo';

import logoAmbassador from '../static/img/logos/logo-ambassador.png';
import logoBamboo from '../static/img/logos/logo-bamboo.png';
import logoDistilNetworks from '../static/img/logos/logo-distilnetworks.png';
import logoDVP from '../static/img/logos/logo-dvp.png';
import logoLunar from '../static/img/logos/logo-lunar.png';
import logoMapbox from '../static/img/logos/logo-mapbox.png';
import logoMVCA from '../static/img/logos/logo-mvca.png';
import logoRepurpose from '../static/img/logos/logo-repurpose.jpg';
import logoSkyspecs from '../static/img/logos/logo-skyspecs.png';
import logoSpotHero from '../static/img/logos/logo-spothero.png';
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
            location="Royal Oak, MI"
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
            src={logoDistilNetworks}
            location="San Francisco, CA"
            href="http://distillnetworks.com"
            name="Distil Networks"
            type="Community Supporter"
          />
          <Logo
            src={logoDVP}
            location="Detroit, MI"
            href="http://detroit.vc"
            name="Detroit Venture Partners"
            type="Investor"
          />
          <Logo
            src={logoLunar}
            location="Detroit, MI"
            href="https://lunarwireless.com/"
            name="Lunar Wireless"
            type="Startup"
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
            location="San Francisco, CA"
            href="http://mapbox.com"
            name="Mapbox"
            type="Community Supporter"
          />
          <Logo
            src={logoRepurpose}
            location="Detroit, MI"
            href="http://www.repurpose.co"
            name="re:purpose"
            type="Startup"
          />
          <Logo
            src={logoSkyspecs}
            location="Ann Arbor, MI"
            href="http://www.skyspecs.com"
            name="Skyspecs"
            type="Startup"
          />
          <Logo
            src={logoSpotHero}
            location="Detroit, MI"
            href="http://www.spothero.com"
            name="Spot Hero"
            type="Community Supporter"
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
            location="San Francisco, CA"
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

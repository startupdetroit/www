import React, { Component } from 'react';
import Logo from './Logo';

import Divider from './Divider';
import AddYourLogo from './AddYourLogo';

import logoAmbassador from '../static/img/logos/logo-ambassador.png';
import logoBamboo from '../static/img/logos/logo-bamboo.png';
import logoCastle from '../static/img/logos/logo-castle.png';
import logoDistilNetworks from '../static/img/logos/logo-distilnetworks.png';
import logoDuo from '../static/img/logos/logo-duo.png';
import logoDVP from '../static/img/logos/logo-dvp.png';
import logoRepurpose from '../static/img/logos/logo-repurpose.jpg';
import logoLunar from '../static/img/logos/logo-lunar.png';
import logoMapbox from '../static/img/logos/logo-mapbox.png';
import logoMightyAI from '../static/img/logos/logo-mightyai.svg';
import logoMVCA from '../static/img/logos/logo-mvca.png';
import logoMySwimPro from '../static/img/logos/logo-myswimpro.png';
import logoSkyspecs from '../static/img/logos/logo-skyspecs.png';
import logoSPLT from '../static/img/logos/logo-splt.png';
import logoSpotHero from '../static/img/logos/logo-spothero.png';
import logoStockX from '../static/img/logos/logo-stockx.jpg';
import logoTechstars from '../static/img/logos/logo-techstars.png';
import logoTechtown from '../static/img/logos/logo-techtown.png';
import logoTome from '../static/img/logos/logo-tome.jpg';
import logoTrucks from '../static/img/logos/logo-trucks.png';
import logoVFA from '../static/img/logos/logo-vfa.png';
import logoWaymark from '../static/img/logos/logo-waymark.png';
import logoWSU from '../static/img/logos/logo-wsu.png';

class Community extends Component {
  render() {
    return (
      <section className="section" id="community">
        <div className="container">
          <Divider />
          <h3 className="title has-text-centered">Community</h3>
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
              src={logoCastle}
              location="Detroit, MI"
              href="https://entercastle.com/"
              name="Castle"
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
              src={logoDuo}
              location="Ann Arbor, MI"
              href="https://duo.com/"
              name="Duo Security"
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
              src={logoRepurpose}
              location="Detroit, MI"
              href="http://www.repurpose.co"
              name="re:purpose"
              type="Startup"
            />
            <Logo
              src={logoLunar}
              location="Detroit, MI"
              href="https://lunarwireless.com/"
              name="Lunar Wireless"
              type="Startup"
            />
            <Logo
              src={logoMapbox}
              location="San Francisco, CA"
              href="http://mapbox.com"
              name="Mapbox"
              type="Community Supporter"
            />
            <Logo
              src={logoMightyAI}
              location="San Francisco, CA"
              href="https://mty.ai/"
              name="Mighty AI"
              type="Community Supporter"
            />
            <Logo
              src={logoMVCA}
              location="Ann Arbor, MI"
              href="http://michiganvca.org"
              name="Michigan Venture Capital Association"
              type="Investor"
            />
            <Logo
              src={logoMySwimPro}
              location="Detroit, MI"
              href="http://myswimpro.com"
              name="MySwimPro"
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
              src={logoSPLT}
              location="Detroit, MI"
              href="http://www.splt.io"
              name="SPLT"
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
              src={logoStockX}
              location="Detroit, MI"
              href="http://www.stockx.com"
              name="StockX"
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
              src={logoTechtown}
              location="Detroit, MI"
              href="http://techtown.com"
              name="Techtown"
              type="Community Supporter"
            />
            <Logo
              src={logoTome}
              location="Royal Oak, MI"
              href="http://tomesoftware.com/"
              name="Tome Software"
              type="Startup"
            />
            <Logo
              src={logoTrucks}
              location="San Francisco, CA"
              href="http://trucks.vc"
              name="Trucks Venture Capital"
              type="Investor"
            />
            <Logo
              src={logoVFA}
              location="Detroit, MI"
              href="https://ventureforamerica.org/"
              name="Venture for America"
              type="Community Supporter"
            />
            <Logo
              src={logoWaymark}
              location="Detroit, MI"
              href="http://waymark.com/"
              name="Waymark"
              type="Startup"
            />
            <Logo
              src={logoWSU}
              location="Detroit, MI"
              href="http://innovationwarriors.wayne.edu/"
              name="WSU Innovation Warriors"
              type="Community Supporter"
            />
          </div>
          <AddYourLogo />
        </div>
      </section>
    );
  }
}

export default Community;

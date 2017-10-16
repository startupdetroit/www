import React, { Component } from 'react';
import Logo from './Logo';

class Community extends Component {
  render() {
    return (
      <section className="section" id="community">
        <h3 className="title">Community</h3>
        <div className="logos">
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
            type="Investors"
          />
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
            type="Supporter"
          />
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
            type="Startups"
          />
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
            type="Supporter"
          />
        </div>
      </section>
    );
  }
}

export default Community;

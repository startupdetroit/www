import React, { Component } from 'react';
import Logo from './Logo';

class Community extends Component {
  render() {
    return (
      <section className="section">
        <h3 className="title">Community</h3>
        <div className="logos">
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
          />
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
          />
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
          />
          <Logo
            src="https://www.techstars.com/uploads/techstars-master-logo-color-600x380.png"
            location="Detroit, MI"
            href="http://techstars.com"
            name="Techstars"
          />
        </div>
      </section>
    );
  }
}

export default Community;

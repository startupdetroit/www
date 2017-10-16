import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <a className="navbar-item" href="#get-involved">
              Get Involved
            </a>
            <a className="navbar-item" href="#community">
              Community
            </a>
            <a className="navbar-item" href="#about">
              About
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

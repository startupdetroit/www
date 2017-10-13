import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Get Involved</a>
            <a className="navbar-item">Community</a>
            <a className="navbar-item">About</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

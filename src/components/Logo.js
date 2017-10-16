import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logo extends Component {
  static propTypes = {
    href: PropTypes.string,
    src: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const { href, src, name, location, type } = this.props;

    return (
      <div className="Logo">
        <a href={href} target="_blank">
          <figure className="image">
            <img src={src} alt={name} />
          </figure>
        </a>
        <span className="type">{type}</span>
        <span className="location">{location}</span>
      </div>
    );
  }
}

export default Logo;

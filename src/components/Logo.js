import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  border: 1px solid #ccc;
  padding: 12px;
  min-height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.span`
  align-self: flex-end;
  font-size: 14px;
  font-style: italic;
`;

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
      <LogoComponent className="Logo">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <figure className="image">
            <img src={src} alt={name} />
          </figure>
        </Link>
        <Info className="name">{name}</Info>
        <Info className="type">
          {type} - {location}
        </Info>
      </LogoComponent>
    );
  }
}

export default Logo;

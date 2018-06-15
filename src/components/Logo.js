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
  margin-bottom: 10px;

  &:hover {
    border-color: #EFADC9;
  }
`;

const Info = styled.span`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 700;
`;

const CompanyName = Info.extend`
  color: #2e3bca;
  text-transform: uppercase;
`;

const CompanyType = Info.extend`
  font-weight: 400;
  font-size: 13px;
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
        <CompanyName>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </CompanyName>
        <CompanyType>
          {type} - {location}
        </CompanyType>
      </LogoComponent>
    );
  }
}

export default Logo;

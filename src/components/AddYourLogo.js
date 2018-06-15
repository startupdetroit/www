import React, { Component } from 'react';
import styled from 'styled-components';

const AddYourLogoComponent = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Inner = styled.div`
  width: 50%;
  padding: 1.5rem 3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const P = styled.p`
  color: #394494;
  font-weight: 700;
  margin-bottom: 1.5rem !important;
`;

class AddYourLogo extends Component {
  render() {
    return (
      <AddYourLogoComponent className="AddYourLogo">
        <Inner className="content has-text-centered">
          <P>Want to add a company or organization?</P>
          <a
            className="button is-link"
            href="https://github.com/startupdetroit/www#want-to-add-your-startup-or-organizations-logo"
            rel="noopener noreferrer"
            target="_blank"
          >
            Contribute on GitHub
          </a>
        </Inner>
      </AddYourLogoComponent>
    );
  }
}

export default AddYourLogo;

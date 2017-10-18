import React, { Component } from 'react';
import styled from 'styled-components';

const DividerComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HR = styled.hr`
  padding: 0;
  margin: 0 0 5rem;
`;

class Divider extends Component {
  render() {
    return (
      <DividerComponent className="Divider">
        <HR />
      </DividerComponent>
    );
  }
}

export default Divider;

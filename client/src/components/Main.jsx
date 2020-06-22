import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import About from './About';

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default () => {
  return (
    <Container>
      <Image />
      <About />
    </Container>
  );
};

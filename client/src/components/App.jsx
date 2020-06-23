import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Main from './Main';

const Container = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;

export default () => {
  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
};
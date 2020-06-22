import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Main from './Main';

const Container = styled.div`
  
`;

export default () => {
  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
};
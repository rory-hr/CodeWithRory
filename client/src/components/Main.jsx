import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Image from './Image';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderSection = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default () => {

  const showPortfolio = useSelector(state => state.showPortfolio);

  return (
    <Container>
      <HeaderSection>
        <Image />
        <About />
      </HeaderSection>
      { showPortfolio ? <Portfolio /> : <Contact /> }
    </Container>
  );
};

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  bottom: 290px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 3px;
  margin-right: 5px;
  color: white;
  border: none;
  outline: none;
  font-weight: bold;
  font-family: 'Indie Flower', cursive;
  background-color: ${props => props.type === 'portfolio' ? '#5f95bb' : '#c0734c'};
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 0.2;
  }
`;

export default () => {
  return (
    <Container>
      <Button type='portfolio'>PORTFOLIO</Button>
      <Button>CONTACT</Button>
    </Container>
  );
};
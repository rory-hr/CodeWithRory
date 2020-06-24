import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: auto;
  bottom: 170px;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 3px;
  margin: auto;
  color: white;
  border: none;
  outline: none;
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'Indie Flower', cursive;
  background-color: ${props => props.type === 'portfolio' ? '#5f95bb' : '#c0734c'};
  transition-property: all;
  transition-duration: 0.3s;
  :hover {
    opacity: 0.7;
  }
  :active {
    opacity: 0.2;
  }
`;

export default () => {

  // const showPortfolio = useSelector(state => state.showPortfolio);
  const dispatch = useDispatch();

  const togglePortfolio = (e) => {
    dispatch({ type: 'ON' });
  };

  const toggleContact = (e) => {
    dispatch({ type: 'OFF' });
  };


  return (
    <Container>
      <Button type='portfolio' onClick={togglePortfolio}>PORTFOLIO</Button>
      <Button onClick={toggleContact}>CONTACT</Button>
    </Container>
  );
};
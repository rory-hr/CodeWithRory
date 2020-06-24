import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;
  height: 80px;
  @media (max-width: 434px) {
    bottom: 200px;
  }
`;

const Method = styled.a`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 180px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  text-decoration: none;
  color: black;
  transition-property: all;
  transition-duration: 0.3s;
  :hover {
    opacity: 0.8;
    box-shadow:0px 0px 5px #c7c7c7;
  }
`;

const Email = styled.p`
  margin: 0 0 2px 5px;
`;

export default () => {
  return (
    <Container>
      <Method href="mailto:rory.roccio@gmail.com">
        <EmailIcon />
        <Email>Email Me</Email>
      </Method>
    </Container>
  );
};

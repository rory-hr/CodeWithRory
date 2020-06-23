import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;
  height: 40px;
  @media (max-width: 434px) {
    bottom: 200px;
  }
`;

const Method = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 120px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  :hover {
    opacity: 0.8;
    box-shadow:0px 0px 5px #c7c7c7;
  }
`;

const Email = styled.a`
  margin: 0 0 2px 5px;
  color: black;
  text-decoration: none;
`;

export default () => {
  return (
    <Container>
      <Method>
        <EmailIcon />
        <Email href="mailto:rory.roccio@gmail.com">Email Me</Email>
      </Method>
    </Container>
  );
};

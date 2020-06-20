import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';


const Container = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Header = styled.p`
  color: black;
`;



export default () => {
  return (
    <Container>
      <Header>Rory</Header>
      <IconButton aria-label="github.com" onClick={() => window.open('https://www.github.com/rory-roccio')}>
        <GitHubIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="linkedin.com" onClick={() => window.open('https://www.Linkedin.com/in/rory-roccio')}>
        <LinkedInIcon fontSize="medium" />
      </IconButton>
    </Container>
  );
};
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
  margin-left: 10px;
`;

const Header = styled.p`
  color: black;
  font-family: 'Indie Flower', cursive;
  margin-right: 5px;
  font-size: 20px;
`;



export default () => {
  return (
    <Container>
      <Header>Code with Rory</Header>
      <IconButton aria-label="github.com" onClick={() => window.open('https://www.github.com/rory-roccio')}>
        <GitHubIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="linkedin.com" onClick={() => window.open('https://www.Linkedin.com/in/rory-roccio')}>
        <LinkedInIcon fontSize="default" />
      </IconButton>
    </Container>
  );
};
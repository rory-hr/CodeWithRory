import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-block-start: 20px;
  margin-block-end: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px 8px 8px 15px;
  font-family: 'Roboto', sans-serif;
  transition-property: all;
  transition-duration: 0.3s;
  :hover {
    box-shadow:0px 0px 5px #c7c7c7;
  }
`;

const Column1 = styled.div`
  display: flex;
  width: 150px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 8px;
`;

const Title = styled.h4`
  margin: 0 0 0 0;
  font-size: 1.5em;
`;

const Description = styled.p`
  margin: 5px 0 5px 0;
  font-size: 1em;
`;

const TechStack = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 0 5px 0;
`;

const Pill = styled.div`
  display: flex;
  height: 25px;
  min-width: 40px;
  background-color: #5f95bb;
  padding: 0 8px 2px 8px;
  color: white;
  margin: 0 4px 2px 0;
  border-radius: 23px;
  text-align: center;
  font-size: 1em;
  align-items: center;
  justify-content: center;
`;

const Tech = styled.h5`
  margin: 0 0 0 0;
`;

const Gif = styled.img`
  max-height: 100px;
  max-width: 90%;
  margin: auto;
`;

export default ({ project }) => {
  return (
    <Container>
      { !project.img ? null : <Column1>
        <Gif src={project.img}/>
      </Column1>}
      <Column2>
        <Title>
          {project.title}
          <IconButton size={'small'} disableRipple={true} disableFocusRipple={true} aria-label="github.com" onClick={() => window.open(project.repo)}>
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Title>
        <Description>{project.description}</Description>
        <TechStack>
        { project.stack.map((tech, i) => <Pill key={i}><Tech>{tech}</Tech></Pill>) }
        </TechStack>
      </Column2>
    </Container>
  );
};
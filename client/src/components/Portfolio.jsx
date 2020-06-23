import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import ReactCSSTransitionGroup from 'react-transition-group';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 425px;
  width: 100%;
  right: 5px;
  margin: 0 5px 0 5px;
  @media (max-width: 434px) {
    bottom: 200px;
  }
`;


const projects = [
  {
    title: 'AoE2 Builder',
    repo: 'https://github.com/rory-roccio/aoe2builder',
    img: 'AoE2Buildr.gif',
    stack: ['React Native', 'React', 'Redux', 'Node', 'Express', 'Postgres'],
    description: 'A game utility application for planning early game strategies for the popular RTS game Age of Empires II.',
    link: null,
  },
  {
    title: 'Custom Calendar',
    repo: 'https://github.com/denali-io/reservations-server',
    img: 'CustomReactCalendar.gif',
    stack: ['React', 'Node', 'Express', 'MySQL'],
    description: 'A custom, interactive calendar for restaurant table bookings.',
    link: null,
  },
  {
    title: 'No-Cap',
    repo: 'https://github.com/no-cap/popular-dishes-service',
    img: null,
    stack: ['React', 'Node', 'Express', 'Mongo', 'Postgres'],
    description: 'Back end scaling and optimization project for a restaurant reviews micro-service.',
    link: null,
  },
];

export default () => {
  return (
    <Container>
      {projects.map((project, i) => <Card key={i} project={project}/>)}
    </Container>
  );
};

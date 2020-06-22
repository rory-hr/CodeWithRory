import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const Image = styled.img`
  border-radius: 8px;
  height: 300px;
  margin: 0 0 0 10px;
`;

export default () => {
  return (
    <Container>
      <Image src='rory.jpg'/>
    </Container>
  );
};

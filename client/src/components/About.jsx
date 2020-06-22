import React from 'react';
import styled from 'styled-components';
import ButtonPanel from './ButtonPanel';

const Container = styled.div`
  display: inline-block;
  position: relative;
  max-width: 200px;
  width: 100%;
  height: 300px;
  margin: 0 10px 0 10px;
  overflow: hidden;
  @media (max-width: 444px) {
    bottom: 200px;
  }
`;

const Text1 = styled.p`
  position: relative;
  font-family: 'Indie Flower', cursive;
  margin: 0 0 0 0;
  width: 300px;
  z-index: -3;
  top: 50px;
  left: 70px;
  color: #ededed;
  transform: rotate(5deg);

`;

const Text2 = styled.p`
  position: relative;
  font-family: 'Indie Flower', cursive;
  margin: 0 0 0 0;
  width: 300px;
  color: #c2c2c2;
  z-index: -2;
  top: 0px;
  right: 30px;
  transform: rotate(23deg);
`;

const Text3 = styled.p`
  position: relative;
  font-family: 'Indie Flower', cursive;
  margin: 0 0 0 0;
  width: 300px;
  color: #d6d6d6;
  z-index: -1;
  bottom: 400px;
  right: 20px;
  transform: rotate(-30deg);
`;

const text1 = `
  const { Units, Buildings, Techs } = require('./models');
  // GET /api/units
  module.exports.getAllUnits = (callback) => {
    Units.find((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  };
`;

const text2 = `
  const express = require('express');
  const app = express();
  app.use('/', express.static(path.join(__dirname, 'public/dist')));
  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.error(\`Failed to start server at port: \${PORT});
    } else {
      console.log(\`Server listening at port: \${PORT}\`);
    }
  });
`;

const text3 = `
  import React from 'react';
  import { useSelect, useDispatch } from 'react-redux';
  import Card from './Card';
  import styled from 'styled-components';

  const Container = styled.div\`
    display: flex;
    flex-direction: column;
  \`;

  export default (props) => {
    const data = useSelect(state => state.data);
    return (
      <div>
        {data.items.map(item => <Card item={item})}
      </div>
    );
  };
`;

export default () => {
  return (
    <Container>
      <Text1>{text1}</Text1>
      <Text2>{text2}</Text2>
      <Text3>{text3}</Text3>
      <ButtonPanel />
    </Container>
  );
};
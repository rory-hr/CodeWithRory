import React from 'react';
import styled from 'styled-components';
import ButtonPanel from './ButtonPanel';

const Container = styled.div`
  display: inline-block;
  position: relative;
  max-width: 400px;
  width: 430px;
  height: 600px;
  margin: 0 10px 0 10px;
  overflow: hidden;
  @media only screen and (max-width: 863px) {
    bottom: 497px;
  }
`;

const Text1 = styled.p`
  position: relative;
  font-family: 'Indie Flower', cursive;
  font-size: 23px;
  margin: 0 0 0 0;
  width: 400px;
  z-index: -3;
  word-break: break-all;
  color: #c2c2c2;

`;

const text4 = `
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
  const express = require('express');\n
  const app = express();\n
  app.use('/', express.static(path.join(__dirname, 'public/dist')));\n
  app.listen(process.env.PORT, (err) => {\n
    if (err) {\n
      console.error(\`Failed to start server at port: \${PORT});\n
    } else {
      console.log(\`Server listening at port: \${PORT}\`);\n
    }\n
  });\n
  const { Units, Buildings, Techs } = require('./models');\n
  // GET /api/units\n
  module.exports.getAllUnits = (callback) => {\n
    Units.find((err, results) => {\n
      if (err) {\n
        callback(err);\n
      } else {\n
        callback(null, results);\n
      }\n
    });\n
  };\n
`;

export default () => {
  return (
    <Container>
      <Text1>{text4}</Text1>
      <ButtonPanel />
    </Container>
  );
};
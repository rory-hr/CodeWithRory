const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const { PORT } = process.env;

app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Failed to start server:`);
    console.dir(err);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});
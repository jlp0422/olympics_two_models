/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path');
const db = require('./db')



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());

/* eslint-disable */

//I added in all the bells and whistles that we might need later on
const express = require('express');
const app = express();
const path = require('path');
const db = require('./db')
const nunjucks = require('nunjucks');
nunjucks.configure({ noCache: true });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(require('body-parser').urlencoded());
app.use(require('method-override')('_method'));

app.use('/', require('./routes'))
app.use('/vendor', express.static('node_modules'))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());
 

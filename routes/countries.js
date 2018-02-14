const countries = require('express').Router();
const db  = require('../db')
const { Athlete } = db.models

countries.get('/', (req, res, next) => {
  Athlete.findAll()
    .then((athletes) => res.render('./models/countries', {athletes}))
    .catch(next)
});

countries.get('/:country', (req, res, next) => {
  Athlete.findAll({
    where: {
      country: req.params.country
    }
  })
  .then((athletes) => {
    console.log(req.url)
   res.send(athletes)
    // res.render('./models/country', { title: req.params.country, athletes })
  })
  .catch(next)
})

//make sure we are exporting (name changed from clarity)
module.exports = countries

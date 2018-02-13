const countries = require('express').Router();
const db  = require('../db')
const { Country } = db.models

countries.get('/', (req,res,next)=>{
  Country.findAll()
    .then((countries)=>{
    res.render('models/countries', ({title: 'All Countries', countries}))
  })
});

countries.get('/:id', (req,res,next)=>{
  Country.findOne({
    where: {id: req.params.id}
  }).then((country)=>{
    res.render('models/country', {title: country.name, country})
  })
})

//make sure we are exporting (name changed from clarity)
module.exports = countries;
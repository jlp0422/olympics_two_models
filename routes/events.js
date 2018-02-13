const events = require('express').Router();
const db  = require('../db')
const { OlympEvent } = db.models

events.get('/', (req,res,next)=>{
  OlympEvent.findAll()
    .then((events)=>{
      res.render('models/events', ({title: 'All Events', events}))
  })
});

events.get('/:id', (req,res,next)=>{
  OlympEvent.findOne({
    where: {id: req.params.id}
  }).then((event)=>{
    res.render('models/event', {title: event.name, event})
  })
})

//make sure we are exporting (name changed from clarity)
module.exports = events;
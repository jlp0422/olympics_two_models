const conn = require('./conn')
const Sequelize = require('sequelize');

// Event is a reserved word in JS, so I named this differently feel free to change
const OlympEvent = conn.define('event', {
  name: {
    type: Sequelize.STRING
  }
})



//can use this to get medals, but I'm pretty lost on how to make that work:

/*
const Medalist = conn.define('medalist', {
  goldName: {
    type: Sequelize.INTEGER
  },
  silverName: {
    type: Sequelize.INTEGER 
  },
  bronzeName: {
    type: Sequelize.INTEGER
  }
})

*/

// we don't need fancy exporting here since it is only one model

module.exports = OlympEvent

//if we do add some frills to the medalists table this is what we'd need to export

/* 
  module.exports = {
    OlympEvent,
    Medalist
  }
*/

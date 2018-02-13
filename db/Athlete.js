/* eslint-disable */

const conn = require('./conn');
const Sequelize = require('sequelize');

const Athlete = conn.define('athletes', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
}, {
  getterMethods: {
    fullName: function() {
      //the way this was formatted before was overkill, this should be available as .this
      return `${this.firstName} ${this.lastName}`
    }
  }
})

// we don't need fancy exporting here since it is only one model
module.exports = Athlete

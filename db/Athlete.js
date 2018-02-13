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
      return `this.getDataValue('firstName') this.getDataValue('lastName')`
    }
  }
})

module.exports = {
  Athlete
}

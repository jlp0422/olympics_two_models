/* eslint-disable */

const conn = require('./conn');
const Sequelize = require('sequelize');
const Country = require('./country')

const Athlete = conn.define('athletes', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  }
}, {
  getterMethods: {
    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    countryURL: function () {
      if (this.country.indexOf(' ') > -1) {
        return this.country.toLowerCase().split(' ').join('_')
      }
      return this.country.toLowerCase()
    }
  },
  setterMethods: {
    countryLink: function () {
      if (this.country.indexOf(' ') > -1) {
        return this.country.toLowerCase().split(' ').join('_')
      }
      return this.country.toLowerCase()
    }
  }
})

// we don't need fancy exporting here since it is only one model
module.exports = Athlete

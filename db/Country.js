/* eslint-disable */

const conn = require('./conn');
const Sequelize = require('sequelize');

const Country = conn.define('countries', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = {
  Country
}

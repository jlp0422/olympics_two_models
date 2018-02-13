/* eslint-disable */

const conn = require('./conn');
const Sequelize = require('sequelize');

const Country = conn.define('countries', {
  name: {
    type: Sequelize.STRING
  }
})

// we don't need fancy exporting here since it is only one model
module.exports = Country

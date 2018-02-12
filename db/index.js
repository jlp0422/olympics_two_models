/* eslint-disable */

const conn = require('./conn');
const Athlete = require('./Athlete')
const Country = require('./Country')

const sync = () => {
  return conn.sync({ force: true })
};

const seed = () => {
  return Promise.all([
    Athlete.create({ firstName: 'Red', lastName: 'Gerard'}),
    Athlete.create({ firstName: 'Erin', lastName: 'Hamlin'}),
    Athlete.create({ firstName: 'Mark', lastName: 'McMorris'})
  ])
};

module.exports = {
  sync,
  seed,
  models: {
    Athlete,
    Country
  }
}

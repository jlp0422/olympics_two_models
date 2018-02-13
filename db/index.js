/* eslint-disable */

const conn = require('./conn');
const Athlete  = require('./Athlete')
const Country  = require('./Country')
const OlympEvent = require('./Event')

const sync = () => {
  return conn.sync({ force: true })
};

const seed = () => {
  return Promise.all([
    Athlete.create({ firstName: 'Red', lastName: 'Gerard'}),
    Athlete.create({ firstName: 'Erin', lastName: 'Hamlin'}),
    Athlete.create({ firstName: 'Mark', lastName: 'McMorris'}),
    Country.create({ name: 'USA'}),
    Country.create({ name: 'Canada'}),
    OlympEvent.create({ name: 'Downhill Skiing'}),
    OlympEvent.create({ name: 'Ice Hockey'})
  ])
};

Athlete.belongsTo(Country);
Country.hasMany(Athlete);


Athlete.belongsToMany(OlympEvent, {through: "medalists"});
/* 
  this will create a middle point model called medalists that will link athletes to events 
  on athleteId and eventId. This will give us access to our top athletes for each event
*/

module.exports = {
  sync,
  seed,
  models: {
    Athlete,
    Country,
    OlympEvent
  }
}

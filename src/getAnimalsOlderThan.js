const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//O Sumo e o Imar Mendes me ajudaram a entender a lógica do retorno do primeiro find que é usado na segunda HOF (every). 
function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;

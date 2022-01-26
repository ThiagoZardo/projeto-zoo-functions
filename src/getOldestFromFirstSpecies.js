const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idFirst = employees
    .find((employee) => employee.managers.includes(id)).responsibleFor[0];

  const oldAge = species.find((specie) => specie.id === idFirst).residents 
    .reduce((acc, curr) => (curr.age > acc ? curr : acc), 0);
}

module.exports = getOldestFromFirstSpecies;

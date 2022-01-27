const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idFuncionario = employees.find((idEmployees) => idEmployees.id === id);
  const idSpecies = idFuncionario.responsibleFor[0];
  const residentes = species.find((animal) => animal.id === idSpecies).residents;

  // Aqui eu recebi a ajuda do Imar Mendes para entender o .reduce()
  const maiorIdade = residentes.reduce((acc, curr) => {
    if (acc < curr.age) {
      return curr.age;
    }
    return acc;
  }, 0);
  const arrayFinal = residentes.find((array) => array.age === maiorIdade);
  return Object.values(arrayFinal);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

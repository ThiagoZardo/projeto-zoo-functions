const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const localizacao = ['NE', 'NW', 'SE', 'SW'];

const mapaAnimais = () => {
  let obj = {};
  localizacao.forEach((element) => {
    obj[element] = species.filter((specie) => specie.location
      .includes(element)).map((nameSpecie) => nameSpecie.name);
  });
  return obj;
};

function getAnimalMap(options) {
  if (!options) {
    return mapaAnimais();
  }
}
console.log(getAnimalMap());
module.exports = getAnimalMap;

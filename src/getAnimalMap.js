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
  if ((!options) || (options.sex === 'female')) {
    return mapaAnimais();
  }
  if ((options.sex === 'female') && (options.sorted === true)) {
    return mapaAnimais();
  }
}
console.log(getAnimalMap({ sex: 'female', sorted: true }));
module.exports = getAnimalMap;

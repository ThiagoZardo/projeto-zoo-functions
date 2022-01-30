/* eslint-disable sonarjs/no-identical-functions */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const localizacao = ['NE', 'NW', 'SE', 'SW'];

const animaisCategorizadosPorLocalizacao = () => {
  console.log('animaisCategorizadosPorLocalizacao');
  const obj = {};
  localizacao.forEach((element) => {
    obj[element] = species.filter((specie) => specie.location
      .includes(element)).map((nameSpecie) => nameSpecie.name);
  });
  return obj;
};

const nomeDeAnimais = () => {
  console.log('nomeDeAnimais');
  const obj = {};
  localizacao.forEach((regiao) => {
    obj[regiao] = species.filter((specie) => specie.location === regiao).map((objAnimal) => ({
      [objAnimal.name]: objAnimal.residents.map((nomeA) => nomeA.name),
    }));
  });
  return obj;
};

const nomeDeAnimaisOrdenados = () => {
  console.log('nomeDeAnimaisOrdenados');
  const obj = {};
  localizacao.forEach((regiao) => {
    obj[regiao] = species.filter((specie) => specie.location === regiao).map((objAnimal) => ({
      [objAnimal.name]: objAnimal.residents.map((nomeA) => nomeA.name).sort(),
    }));
  });
  return obj;
};

const animaisMachoOuFemea = (options) => {
  console.log('animaisMachoOuFemea');
  const obj = {};
  if (options.sex === 'female') {
    localizacao.forEach((regiao) => {
      obj[regiao] = species.filter((specie) => specie.location === regiao).map((objAnimal) => ({
        [objAnimal.name]: objAnimal.residents.filter((femea) => femea.sex === 'female')
          .map((nomeA) => nomeA.name),
      }));
    });
    return obj;
  }
  localizacao.forEach((regiao) => {
    obj[regiao] = species.filter((specie) => specie.location === regiao).map((objAnimal) => ({
      [objAnimal.name]: objAnimal.residents.filter((femea) => femea.sex === 'male')
        .map((nomeA) => nomeA.name),
    }));
  });
  return obj;
};

const machoEFemeaOrdenados = (options) => {
  console.log('MachoEFemeaOrdenados');
  const obj = {};
  if (options.sex === 'female') {
    localizacao.forEach((regiao) => {
      obj[regiao] = species.filter((specie) => specie.location === regiao).map((objAnimal) => ({
        [objAnimal.name]: objAnimal.residents.filter((femea) => femea.sex === 'female')
          .map((nomeA) => nomeA.name).sort(),
      }));
    });
    return obj;
  }
  localizacao.forEach((regiao) => {
    obj[regiao] = species.filter((specie) => specie.location === regiao).map((objAnimal) => ({
      [objAnimal.name]: objAnimal.residents.filter((femea) => femea.sex === 'male')
        .map((nomeA) => nomeA.name).sort(),
    }));
  });
  return obj;
};

const getAnimalMap3 = (options) => {
  console.log('getAnimalMap3');
  return machoEFemeaOrdenados(options);
};

const getAnimalMap2 = (options) => {
  console.log('getAnimalMap2');
  if ((options.sorted === true) && (!options.sex)) {
    return nomeDeAnimaisOrdenados();
  }
  if ((options.includeNames === true) && (!options.sorted)) {
    return nomeDeAnimais();
  }
  return getAnimalMap3(options);
};

function getAnimalMap(options) {
  if ((!options) || (!options.includeNames)) {
    return animaisCategorizadosPorLocalizacao();
  }
  if ((options.sex) && (!options.sorted)) {
    return animaisMachoOuFemea(options);
  }
  return getAnimalMap2(options);
}
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;

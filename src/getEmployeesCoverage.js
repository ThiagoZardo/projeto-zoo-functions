const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
// Dica do rafael Elias começar pelos undefined para guardar o objeto retornado.
// Também recebi a ajuda da Sheila Nakashima e do Imar Mendes pois eu não estava lembrando das sintaxes das Hofs.
const retornaListaFuncionarios = () => {
  const array = [];
  employees.forEach((element) => {
    const obj = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: species.filter((specie) => element.responsibleFor
        .includes(specie.id)).map((nomeAnimal) => nomeAnimal.name),
      locations: species.filter((specie) => element.responsibleFor
        .includes(specie.id)).map((nomeAnimal) => nomeAnimal.location),
    };
    array.push(obj);
  });
  return array;
};

const pessoasFuncionarias = retornaListaFuncionarios();

const verificaID = (objeto) => {
  const pessoaID = pessoasFuncionarias.find((element) => element.id
    .includes(objeto.id));
  if (!pessoaID) {
    throw new Error('Informações inválidas');
  }
  return pessoaID;
};

const verificaName = (objeto) => {
  const pessoaName = pessoasFuncionarias.find((element) => element.fullName
    .includes(objeto.name));
  if (!pessoaName) {
    throw new Error('Informações inválidas');
  }
  return pessoaName;
};

const retornaObjetoFuncionario = (objeto) => {
  if (objeto.id) {
    return verificaID(objeto);
  }
  if (objeto.name) {
    return verificaName(objeto);
  }
};

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return retornaListaFuncionarios();
  }
  if (typeof parametro === 'object') {
    return retornaObjetoFuncionario(parametro);
  }
}

module.exports = getEmployeesCoverage;

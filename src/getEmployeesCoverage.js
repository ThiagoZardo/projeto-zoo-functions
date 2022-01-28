const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
const retornaListaFuncionarios = () => {
  const array = [];
  employees.forEach((element) => {
    const obj = {
      id: element.id,
      fullName: element.firstName + ' ' + element.lastName,
      species: species.filter((specie) => element.responsibleFor.includes(specie.id)).map((nomeAnimal) => nomeAnimal.name),
      locations: species.filter((specie) => element.responsibleFor.includes(specie.id)).map((nomeAnimal) => nomeAnimal.location),
    };
    array.push(obj);
  })
  return array;
}

const retornaObjetoFuncionario = (objeto) => {
  const pessoasFuncionarias = retornaListaFuncionarios();
  if (objeto !== objeto.name) {
    console.log('Objeto com ID')
  return pessoasFuncionarias.find((element) => element.id
  .includes(objeto.id));
  }
  return pessoasFuncionarias.find((element) => element.fullName
  .includes(objeto.name));
}

function getEmployeesCoverage(parametro) {
  if(!parametro) {
    return retornaListaFuncionarios();
  }
  if(typeof parametro === 'object') {
    return retornaObjetoFuncionario(parametro);
  }
  throw new Error(/^Informações inválidas$/);
}

console.log(getEmployeesCoverage({ name: 'Spry' }))
module.exports = getEmployeesCoverage;
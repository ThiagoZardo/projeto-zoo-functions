const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Esta função fiz com a ajuda do Imar Mendes e da Vêronica.
function countAnimals(animal) {
  // Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
  if (!animal) {
    const obj = {};
    species.forEach((element) => { obj[element.name] = element.residents.length; });
    return obj;
  }
  // Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
  const animalRetornado = species.find((specieAnimal) => animal.specie === specieAnimal.name);
  if (!animal.sex) {
    return animalRetornado.residents.length;
  }
  // Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
  return animalRetornado.residents
    .filter((specieBySex) => specieBySex.sex === animal.sex).length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;

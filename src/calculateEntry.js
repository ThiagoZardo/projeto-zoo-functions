const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(array) {
  const quantidadePessoas = { child: 0, adult: 0, senior: 0 };
  array.forEach((element) => {
    if (element.age < 18) {
      quantidadePessoas.child += 1;
    }
    if (element.age >= 18 && element.age < 50) {
      quantidadePessoas.adult += 1;
    }
    if (element.age >= 50) {
      quantidadePessoas.senior += 1;
    }
  });
  return quantidadePessoas;
}

function calculateEntry(array) {
  if (!array || Object.keys(array).length === 0) {
    return 0;
  }
  const objRetornado = countEntrants(array);
  let valorTotal = 0;
  valorTotal += objRetornado.child * prices.child;
  valorTotal += objRetornado.adult * prices.adult;
  valorTotal += objRetornado.senior * prices.senior;
  return valorTotal;
}
module.exports = { calculateEntry, countEntrants };

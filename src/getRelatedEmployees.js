const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => element.managers.includes(id));
}
// Imar Mendes me ajudou a entender o uso do Includes()
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const employeesLet = employees.filter((employee) => employee.managers.includes(managerId));
    return employeesLet.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };

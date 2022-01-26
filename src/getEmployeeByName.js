const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

// const getSpeciesByIds = require('./getSpeciesByIds');
function getEmployeeByName(employeeName) {
  return employees.find((employe) =>
    employe.firstName === employeeName || employe.lastName === employeeName);
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;

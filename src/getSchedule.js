const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes']

let obj = {};

function getSchedule(scheduleTarget) {
  // Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
  if (!scheduleTarget){
    daysOfWeek.forEach((element) => {
      if (element !== 'Monday') {
        obj[element] = {
          'officeHour': `Open from ${hours[element].open}am until ${hours[element].close}pm`,
          'exhibition': species.filter((specie) => specie.availability.includes(element))
          .map((animal) => animal.name),
        }
      } else {
          obj[element] = {
            'officeHour': 'CLOSED',
            'exhibition': 'The zoo will be closed!',
          }  
        }
    });
  }
  return obj;
}

console.log(getSchedule());
module.exports = getSchedule;
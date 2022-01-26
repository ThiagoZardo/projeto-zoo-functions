const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes']

let obj = {};

function getSchedule(scheduleTarget) {
  // 1- Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
  // 2- Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
  if (!scheduleTarget){
    diasHorariosAnimais();
  }

  // Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
  daysOfWeek.forEach((element) => {
    if (scheduleTarget === element && scheduleTarget !== 'Monday') {
      obj[element] = {
        'officeHour': `Open from ${hours[element].open}am until ${hours[element].close}pm`,
        'exhibition': species.filter((specie) => specie.availability.includes(element))
        .map((animal) => animal.name),
      }
    }
  })
  return obj;
}

const diasHorariosAnimais = () => {
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
  return obj;
}

console.log(getSchedule('Monday'));
module.exports = getSchedule;
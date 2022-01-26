const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = ['lions', 'tigers', 'bears', 'penguins', 'otters',
  'frogs', 'snakes', 'elephants', 'giraffes'];

const obj = {};

const returnMonday = () => {
  obj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return obj;
};

const diasHorariosAnimais = () => {
  const obj2 = {};
  daysOfWeek.forEach((element) => {
    if (element !== 'Monday') {
      obj2[element] = {
        officeHour: `Open from ${hours[element].open}am until ${hours[element].close}pm`,
        exhibition: species.filter((specie) => specie.availability.includes(element))
          .map((animal) => animal.name),
      };
    } else {
      obj2[element] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return obj2;
};

const returnDias = (scheduleTarget) => {
  const obj3 = {};
  daysOfWeek.forEach((element) => {
    if (scheduleTarget === element) {
      obj3[element] = {
        officeHour: `Open from ${hours[element].open}am until ${hours[element].close}pm`,
        exhibition: species.filter((specie) => specie.availability.includes(element))
          .map((animal) => animal.name),
      };
    }
  });
  return obj3;
};

const returnAnimalExibicao = (scheduleTarget) => {
  return console.log('Retornou Animal')
};

function getSchedule(scheduleTarget) {
  if ('Monday'.includes(scheduleTarget)) {
    return returnMonday();
  }
  if (!scheduleTarget || !animals.includes(scheduleTarget) && !daysOfWeek.includes(scheduleTarget)) {
    return diasHorariosAnimais();
  }
  if (daysOfWeek.includes(scheduleTarget)) {
    return returnDias(scheduleTarget);
  }
  if (animals.includes(scheduleTarget)) {
    return returnAnimalExibicao(scheduleTarget);
  }
  // if (!scheduleTarget || scheduleTarget !== animals || scheduleTarget !== daysOfWeek) {
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;

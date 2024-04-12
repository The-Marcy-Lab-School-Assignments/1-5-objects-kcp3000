const coolGreeting = (greet) => {
  // person = {
  //   name: 'Sara',
  //   bio: 'Too cool 4 skool.',
  //   age: 32,
  //   isCool: true,
  // };
  if (greet['isCool'] !== true) return `Greetings ${greet.name}, how have you been lately?`
  return `What is UP ${greet.name.toUpperCase()}? How you been doin'?`
  //this took way too long to figure out 
};

const haveBirthday = (person) => {
  // let = people = {
  //     age: 24,
  // }
  person['age'] = person['age'] + 1 || 1
  console.log(person['age'])
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person['name'];
  person['spyHandle'] = spyHandle;
  console.log(person)
};

const carMaker = (name, maker, year) => {
  const needsOilChange = false
  return { name, maker, year, needsOilChange };
};

const weAreNotFriends = (person) => {
  //delete person.friends.pop()
  //if (typeof person['friend'] === "undefined")
  return person.friends.pop()
};

const listHobbies = (person) => {
  for (let i = 0; i < person['hobbies'].length; i++) {
    console.log(`${person.name} likes ${person['hobbies'][i]}.`)
  }
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};

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

const haveBirthday = () => {
  const person = {
    age: 24,
  }
  person.age++
}

const becomeSecretAgent = () => {
};

const carMaker = () => {
};

const weAreNotFriends = () => {
};

const listHobbies = () => {
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

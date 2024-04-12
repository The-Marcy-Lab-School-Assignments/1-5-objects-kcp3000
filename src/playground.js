const coolGreeting = (greet) => {
    person = {
        name: 'Sara',
        bio: 'Too cool 4 skool.',
        age: 32,
        isCool: true,
    };
    // if (person['isCool'] === true && person['name'] === greet) {
    //     return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
    // } else {
    //     person.name = greet
    //     return `Greetings ${person.name}, how have you been lately?`
    // }
    if (person['isCool'] !== true) return `Greetings ${greet}, how have you been lately?`
    if (person['isCool'] === true || person['name'] === greet) return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
};

//console.log(coolGreeting('Bob'))

const haveBirthday = (person) => {
    // let = people = {
    //     age: 24,
    // }
    //if (typeof person['age'] === "undefined") person['age'] = 0
    person['age'] = person['age'] + 1 || 1
    console.log(person['age'])
};
// const age1 = 30;
// const age2 = 0;
// const age3 = 100;
// const person1 = { name: 'Sara', age: age1 };
// const person2 = { name: 'Bob', age: age2 };
// const person3 = { name: 'Jo', age: age3 };


// haveBirthday(person1)


// const person1 = {
//     name: 'Sara',
//     age: 30,
// };

// const person2 = {
//     name: 'Sara',
//     age: 30,
// };

const becomeSecretAgent = (person, spy) => {
    delete person['name'];
    person['spy'] = spy;
    console.log(person)
};
// delete person2.name
// console.log(person2.name)
// person2['spy'] = '007'
// console.log(person2)

//becomeSecretAgent(person2, '007')

const carMaker = (name, maker, year) => {
    const needsOilChange = false
    return { name, maker, year, needsOilChange };
};

//console.log(carMaker('Model 3', 'Tesla', 2020))

// const person1 = {
//     name: 'Sara',
//     age: 30,
//     friends: ['Bob', 'Joe', 'Sally'],
// };

const weAreNotFriends = (person) => {
    //delete person.friends.pop()
    if (typeof person['friend'] === "undefined") //person['friends'] = 'Sally'
        //     console.log(person.friends.pop())
        // //delete person.friends.pop()
        // return person['friends']
        return person.friends.pop()
};


// console.log(weAreNotFriends(person1))
// console.log(weAreNotFriends(person1))
// console.log(weAreNotFriends(person1))

// const person1 = {
//     name: 'Sara',
//     age: 30,
//     hobbies: ['hiking', 'biking', 'skiing'],
// };

// const person2 = {
//     name: 'Jane',
//     age: 43,
//     hobbies: ['jogging', 'chess', 'swimming'],
// };

const listHobbies = (person) => {
    for (let i = 0; i < person['hobbies'].length; i++) {
        console.log(`Jo likes ${person['hobbies'][i]}`)
    }
};

//listHobbies(person2)

const getNextOpponent = () => {
    if ()
};
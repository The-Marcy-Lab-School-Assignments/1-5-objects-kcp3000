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

const fighters = {
    name: 'Fighters',
    sport: 'basketball',
    wins: 3,
    location: {
        city: 'Bridgeport',
        state: 'CT',
    },
    matches: [
        {
            teamName: 'Dunkaroos',
            skill: 9,
            wins: 12,
        },
        {
            teamName: 'Space Jammers',
            skill: 10,
            wins: 16,
        },
        {
            teamName: 'Mustangs',
            skill: 6,
            wins: 10,
        },
    ],
};

// const getNextOpponent = (team) => {
//     //let newArr = []
//     for (let i = 0; i < team.matches.length; i++) {
//         if (typeof team === 'undefined') return null
//         return team.matches[i].teamName;
//     }
// };

// console.log(getNextOpponent(fighters))
//console.log(getNextOpponent(fighters))


const person = {
    name: 'Sara',
    age: 30,
    bio: 'What a legend',
};

const car = {
    name: 'Civic',
    maker: 'Honda',
    year: 2010,
};

const listAllKeys = (object) => {
    console.log(Object.values(object))
}

//(listAllKeys(car))

const users = [
    {
        name: 'Sara',
        age: 30,
        bio: 'What a legend',
    },
    {
        name: 'Bob',
        age: 30,
        bio: "Kind of mean if we're being honest",
    },
];

const cats = [
    {
        name: 'Fluffy',
        breed: 'Persian',
        isAJerk: true,
        isPerfect: true,
    },
    {
        name: 'Mittens',
        breed: 'Tabby',
        isAJerk: true,
        isPerfect: true,
    },
    {
        name: 'Socks',
        breed: 'Calico',
        isAJerk: false,
        isPerfect: true,
    },
]

const convertToMatrix = (object) => {
    //console.log(Object.entries(object))
    //console.log(Object.values(object))
    // console.log(Object.keys(object[0]))
    // console.log(Object.values(object[0]))
    // console.log(Object.values(object[1]))
    //console.log(object[0]['name'])
    // for (const key in object) {
    //     console.log(key[0])
    // }
    let matrix = [];
    if (!object?.length) return matrix
    let key = Object.keys(object[0])
    matrix.push(key)
    for (let i = 0; i < object.length; i++) {
        let values = Object.values(object[i])
        //let keys = Object.keys(object[i])
        matrix.push(values)
    };
    // for (let j = 0; j < object.length; j++) {
    //     let key = Object.keys(object[j])
    //     //matrix.push(key)
    //     console.log(key[0])
    //     // if (key === 0) {
    //     //     console.log(key)
    //     // }
    // }
    // let val1 = Object.values(object[0])
    // let val2 = Object.values(object[1])
    // matrix.push(keys, val1, val2)
    return matrix

};

// console.log(convertToMatrix(cats))
//console.log(convertToMatrix(users))


const user = {
    name: 'Zo',
    age: 28,
};

const lapTimes = ['3:07', '3:43', '3:15'];

// const name = user.name;
// const age = user.age;

// const firstLap = lapTimes[0];
// const secondLap = lapTimes[1];
// const thirdLap = lapTimes[2];

const { name, age } = user
const [a, b, c] = lapTimes
console.log(age)
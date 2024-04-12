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

console.log(coolGreeting('Bob'))

// const haveBirthday = () => {
//     let = people = {
//         age: 24,
//     }
//     console.log(people.age + 1)
// }

//haveBirthday()
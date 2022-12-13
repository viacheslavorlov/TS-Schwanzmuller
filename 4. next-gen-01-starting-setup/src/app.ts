//! ES6 feachers

const userName = "slava"; // scope variable

// userName = "Viacheslav" //!cant be changed

// let age = 30; // scope variable


// Arrow functions

// const add = (a: number, b: number) => {
//   return a + b;
// }

const add = (a: number, b: number = 2) => a + b;
//? b - default argument
const printOutput: (a: number | string) => void = output => console.log('output', output)

console.log(printOutput(add(40)));

//DOM

const btn = document.querySelector('button')!;
btn.addEventListener('click', e => console.log(e))


//* Array

const hobbies = ['sport', 'sex']
const activeHobbies = ['skieing']

activeHobbies.push(...hobbies)
console.log(activeHobbies)

//* Objects

const person = {
    firstName: 'slava',
    age: 35
}

const copiedPerson = {...person}

person.firstName = 'tanya'

console.log('copiedPerson', copiedPerson)
console.log('person', person)


//* spread params

const addMany = (...nums: number[]) => {
    return nums.reduce((currentResult, currentValue) => {
      return currentResult + currentValue;
    }, 0)
}

console.log(addMany(1, 3, 4, 5))

//* Destructuring
// arrays
const [hobbie1, hobbie2, ...restHobbies ] = activeHobbies;

console.log(hobbie1, hobbie2, restHobbies);

//*objects
const {firstName: username, age} = person;

console.log(username, age);
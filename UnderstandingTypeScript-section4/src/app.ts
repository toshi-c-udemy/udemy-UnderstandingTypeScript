const userName = 'Max';
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age >= 20) {
//   let isAdult = true;
// }

// console.log(isAdult);

// console.log(result);

const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add(2));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => {
    console.log(event);
  });
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30,
};

const copiedPerson = {
  ...person,
};

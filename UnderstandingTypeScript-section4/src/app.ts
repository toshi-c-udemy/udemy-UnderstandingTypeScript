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

const add = (a: number, b: number) => a + b;

const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add(2, 5));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => {
    console.log(event);
  });
}
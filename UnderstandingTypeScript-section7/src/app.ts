// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(' ');
// });

// function merge<T, U>(objA: T, objB: U) : T & U
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<
  {
    name: string;
    hobbies: string[];
  },
  { age: number }
>({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
const mergedObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);

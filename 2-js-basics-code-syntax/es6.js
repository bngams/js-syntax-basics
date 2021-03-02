// variable
// var hoisting (soucis sur la portée) 
let myVar = 3;

// const
const myConst = 2;
const myConstArray = [];
myConstArray.push('item');

// arrow function
function hello(param) {
  // ...
}

let hello = function (param) {
  // ...
}

let hello = (param) => {
  // ... 
}

// for of ...
const items = ['1', '2', '3'];
for (item of items) {
  // ...
}

// destruturing

// spread operators ...
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

const evenNumbers = [2, 4, 6];
const notEvenNumbers = [1, 3, 5];
const allNumbers = [...evenNumbers, ...notEvenNumbers];

// rest parameters
function sum(...theArgs) {
  let result = 0;
  for (arg of theArgs) {
    result += arg;
  }
  return result;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));


// default paramaters
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5


// template litterals
let myVar = 'World';
let myString = 'hello ' + myVar;
let myLiteral = `hello 
line return
${myVar}
`; // magic quotes (altgr + 7 - `)

// Typescrit is like an es6 extension (usage, syntax, etc.)
// let myNumber: number;
// myNumber = "text";

// function(p1: String, p2: number): boolean {

// }
// This is a line comment 

/*
This is a 
multiple line comment
*/

/*
 * JS Doc comment
 * @param {string} the param
 * @returns {string} transformed string
 */
 
/**
 * Variables and type
 * Here we use the var keyword to declare variables
 * We will see the let keyword with ES6 spec.
 * We don't use variable typing, for we need to use typescript
 */
// basic types
var myNumber = 3;                   // a number (float, integer, etc.)
var myString = "Hello, World!"      // a string
var myBoolean = true;               // a boolean

// Advanced types
var myArray = [];                   // an array
var myObject = {};                  // an object

// Other types (undefined and null)
// undefined
var newVariable; // declaration
console.log(newVariable); //prints undefined
// null
var emptyVariable = null;
console.log(emptyVariable); // prints null

/**
 * Arrays
 */
// define an array
var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);

// access array values (by index)
console.log(myArray[1]);      // prints out 2

// we can use random index
var myArray = []
myArray[3] = "hello"
console.log(myArray); // prints [undefined, undefined, undefined, "hello"]

// a basic js array can store any types 
var myArray = ["string", 10, {}]

// arrays operations (Array API)
// to see available features on Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var myArray = [];
myArray.push(1);
myArray.push(2);
myArray.push(3);
console.log(myArray.pop()); // prints last element in array: 3
console.log(myArray); // prints complete array: 1,2,3
// other methods
myArray.shift(); // remove entry according to push order (like a Queue - FIFO - Fist In First Out) 
myArray.unshift(0); // add entry at the first index: 0,1,2,3
var splice = myArray.splice(1,3); // get a copy of an array on specified index range

/**
 * Operators
 */
// addition
var a = 1;
var b = 2;
var c = a + b;     // c is now equal to 3
 
// string concatenation
var name = "John";
console.log("Hello " + name + "!");
console.log("The meaning of life is " + 42);
console.log(42 + " is the meaning of life");

// types behaviour (depending on types, operations can have differents behaviours)
console.log(1 + "1");   // outputs "11"

// other math operators
console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6
console.log(5 % 3);     // outputs 2

// shortcuts assignments syntax
// /= , *= , -= , +=, %=
var myNumber = 4;
myNumber /= 2 // equivalent to myNumber = myNumber / 2;

// the Math API
// Math.random(), Math.abs, Math.exp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math


/**
 * Conditions
 */
// condition and operator
// if(condition) is true ... else ...
if (true) {
    console.log("if condition returns True");
} else {
    console.log("False case condition");
}
// NOT OPERATOR
var notTrue = false;
if (!notTrue)
{
    console.log("not not true is true!");
}

// comparison operators
// >, >=, <, <=, ==, ===
var a = 1;
var b = 2;
if (a < b) {
    console.log("a is smaller than b");
} 

// compare types => "==="
console.log("1" == 1); // true
console.log("1" === 1); // false

// logical Operators
// AND operator &&
// OR operator ||
// NOT operaror !
if (a < b && c > b) {
    console.log("a is smaller than b AND c is larger than b.");
}

// if...else if...else
if (a < b) {
	console.log("a is smaller than b.");
} else if (c > b) {
    console.log("c is larger than b.");
}

// switch
var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}

/**
 * Loops
 */
var i;
for (i = 0; i < 3; i = i + 1) {
    console.log(i);
}

// similar to
for (var i = 0; i < 3; i++) {
    console.log(i);
}

// loop over array
var myArray = ["A", "B", "C"];
for (var i = 0; i < myArray.length; i++) {
    console.log("The member of myArray in index " + i + " is " + myArray[i]);
}

// while
var i = 99;
while (i > 0) {
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}

// break => stop loop
var i = 99;
while (true) {
    console.log(i);
    i -= 1;
    if (i == 0) {
        break;
    }
}

// continue => pass to over element in the loop
for (var i = 0; i < 100; i++) {
    // check that the number is even
    if (i % 2 == 0) {
        continue;
    }
    // if we got here, then i is odd.
    console.log(i + " is an odd number.");
}


/**
 * Functions
 */
// define a function
function hello(name) {
    return "Hello " + name + "!";
}
// call a function
console.log(hello("World"));// prints out Hello World!

// other way to define a function
var hello = function(name) {
    return "Hello " + name + "!";
}
// we call it the same way
console.log(hello("World"));// prints out Hello World!

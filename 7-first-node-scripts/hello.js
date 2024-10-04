function getFullName(first, last) {
  return first + ' ' + last;
}

let first = process.argv[2];
let last = process.argv[3];

console.log('Hello, ' + getFullName(first, last) + '!');
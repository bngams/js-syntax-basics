function getFullName(first, last) {
  return first + ' ' + last;
}

var first = process.argv[2];
var last = process.argv[3];

console.log('Hello, ' + getFullName(first, last) + '!');
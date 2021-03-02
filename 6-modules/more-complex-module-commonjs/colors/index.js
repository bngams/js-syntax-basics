var Color = require('colors.js').color;
console.log(Color);

const allColors = [
  new Color('brightred', '#E74C3C'),
  new Color('soothingpurple', '#9B59B6'),
  new Color('skyblue', '#5DADE2'),
  new Color('leafygreen', '#48C9B0'),
  new Color('sunkissedyellow', '#F4D03F'),
  new Color('groovygray', '#D7DBDD'),
];

// var getRandomColor = function() {
//   return allColors[Math.floor(Math.random() * allColors.length)];
// }
// exports.getRandomColor = getRandomColor;

exports.getRandomColor = () => {
  return allColors[Math.floor(Math.random() * allColors.length)];
}

exports.allColors = allColors;
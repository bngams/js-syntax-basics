console.log('App starting...');
// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
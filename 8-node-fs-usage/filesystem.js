var fs = require('fs');

// usage
// fs.writeFile(file, data, callback)

fs.writeFile('file.txt', 'A line in the file', function(err) {
   console.log("Data written successfully!");
});

// if execute a second time it overrides file content
fs.writeFile('file.txt', 'Another line in the file', function(err) {
   console.log("Data written successfully!");
});

var content = '\n Another line in the file';
fs.writeFile('file-add.txt', content, { flag: 'a+' }, err => {})

// fs.appendFile

// ressources
// https://nodejs.dev/writing-files-with-nodejs

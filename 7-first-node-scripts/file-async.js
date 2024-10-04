// require => Common JS
const fs = require('fs'); // charger le module filesystem de node
const path = require('path'); // charger le module path

// créer un fichier avec du contenu JSON
const users = [
  { id: 1, name: 'Boris'},
  { id: 2, name: 'Eddy'}
];

// serialize in a file 
// 1. declarer le chemin 'absolu' du fichier
console.info('Resolving path...'); // /!\ console.log vs .info (log en général pour debug/dev/local; info => journalisation) 
const filePath = path.resolve('users.json');

const doSomethingAfterCreate = (filePath) => {
  console.info('doSomethingAfterCreate');
} 

/**
 * Create file then callback with filePath
 * @param {string} filePath 
 * @param {FunctionStringCallback} callback 
 */
const createFile = (filePath, callback) => {
    // 3. créer le fichier avec son contenu
    console.info('Creating file...');
    fs.writeFile(filePath, JSON.stringify(users), () => {
      console.info('File created...');
      callback(filePath);
    });
}  

const createFileAfterRm = (filePath) => {
  // suite du programme
  console.info('File removed...');
  // custom callback
  createFile(filePath, (newFile) => {
    console.info('File created after remove', newFile)
  });
} 

// 2. verifier si le fichier existe, si oui supprimer
fs.exists(filePath, (fileExists) => {
  if(fileExists) {
    console.info('Removing existing file...');
    fs.rm(filePath, () => {
      //  /!\ http://callbackhell.com/
      createFileAfterRm(filePath);
    })
  } else {
    // existing function as callback
    createFile(filePath, doSomethingAfterCreate);
  } 
})

// fs.promise
fs.promises.writeFile(filePath).then(() => { 
  // ..
})


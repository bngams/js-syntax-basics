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

// 2. verifier si le fichier existe, si oui supprimer
if(fs.existsSync(filePath)) {
  console.info('Removing existing file...');
  fs.rmSync(filePath);
} 

// 3. créer le fichier avec son contenu
console.info('Creating file...');
fs.writeFileSync(filePath, JSON.stringify(users));
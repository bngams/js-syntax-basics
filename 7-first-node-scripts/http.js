const http = require('http'); // "importer" un module code Node.JS

http.get('http://jsonplaceholder.typicode.com/posts', (request) => {    
    // concaténer les données recues (concaténer les chunk) 
    let rawData = '';
    request.on('data', (chunk) => { rawData += chunk; });
    // afficher le résulat
    request.on('end', () => {
        console.log('rawData', rawData);
    })
});
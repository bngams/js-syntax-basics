const http = require('http');

const hello = (res) => {
    console.log("Hello");
    // writeHead(requestStatus, { headers })
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
}

const do404 = (res) => {
    res.writeHead(404);
    res.end("ERROR 404");
}

// FONCTION QUI DIT COMMENT TRAITER LES REQUETES
// req => la requete recue par le srv
// res => la reponse renvoyée par le srv
const handleRequest = (req, res) => {
    // routing ? 
    if(req.url == '/hello' && req.method == 'GET') {
        hello(res);
    }

    do404(res);
    
};

// CREATION SERVER
const server = http.createServer(handleRequest);
// LANCER SUR LE PORT 80
server.listen(8000, () => {
    console.log('server on');
});
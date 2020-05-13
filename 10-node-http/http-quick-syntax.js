// require => supported file extensions .js / .json / .node /
let http = require('http');

// quick syntax 
let requestHandler = function (req, res) {
	console.log('request received');
}
let app = http.createServer(requestHandler);
app.listen(3000, () => {
	console.log("server listening on port 3000");
});

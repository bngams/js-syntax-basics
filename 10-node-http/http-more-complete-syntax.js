const http = require('http');

// complete syntax
let server = http.createServer(); // Event (EventEmitter)

// request event, with callback
server.on('request', (req, res) => {
	// req => http.incomingMessage
			// params
	// req => Stream -> ReadableStream
	var body = [];
	// chunk = request part
	req.on('data', (chunk) => {
		body.push(chunk);
	})
	// only called once
	req.on('end', () => {
		body.concat().toString();
	})


	// res => http.serverResponse
			// html, json
	// res => Stream -> Writeable stream
	res.statusCode = 200;
	// res.setHeader('Content-type', 'application/json');
	res.writeHead(200, {
		'Content-type': 'application/json',
		'property': 'value'
	});
	// JSON.stringify(obj);
	res.write('body');
	res.end();
});

server.on('response', (req) => {
	console.log('response intercept');
})

const port = 8080;

server.listen(port, () => {
	console.log("Server is listening on port " + port)
});

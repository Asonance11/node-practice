var http = require('http');
var dt = require('./firstModule');

http
	.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(`The date and time is currently ${dt.myDateTime()}`);
	})
	.listen(8080);

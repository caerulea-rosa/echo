/*jshint node:true*/
'use strict';

const port = process.argv.length > 2 ? +process.argv[2] : 0 || 8080;

console.log(`Echo server listening on ${port}`);
require('net')
	.createServer((socket) =>
		socket.pipe(socket)
		      .pipe(process.stdout)
	)
	.listen(port, '0.0.0.0');

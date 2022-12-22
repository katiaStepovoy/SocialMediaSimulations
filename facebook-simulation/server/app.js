const http = require('http');
const express = require('express');

console.log("server up");
	const server = http.createServer((req,res) => {
		console.log(req.url, req.method, req.headers);
		res.setHeader('Content-Type', 'text/html');
	});
	server.listen(3000); 


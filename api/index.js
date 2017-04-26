'use strict';
const http = require('http');

const config = require('./config');
const app = require('./core');

const server = http.createServer(app.router);

server.listen(config.PORT,() => console.log(`server running on port ${config.PORT}`));
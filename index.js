const http = require("http");
const os = require("os");

var handler = (request, response) => {
  console.log(`Received request from ${request.connection.remoteAddress}`);
  response.writeHead(200);
  response.end(`${os.hostname()}\n`);
};

var server = http.createServer(handler);
server.listen(8080);

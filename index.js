var http = require('http');

http.createServer(function (req, res) {
  console.log(req)
  console.log(res)
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);
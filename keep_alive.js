vat http = require('http');

http.createSserver(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

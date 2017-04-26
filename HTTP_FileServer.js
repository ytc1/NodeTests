
var fs = require('fs');
var http = require('http')
var portNumber = process.argv[2];

var dst;
var server = http.createServer(function (req, res) {
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(dst)
  server.res(dst);
})
server.listen(Number(portNumber));

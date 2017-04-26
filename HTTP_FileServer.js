
const fs = require('fs');
const http = require('http')
const portNumber = process.argv[2];
const filePath = process.argv[3];

<<<<<<< HEAD
var dst;
var server = http.createServer(function (req, res) {
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(res)
=======
const server = http.createServer(function (req, res) {
  const readStream = fs.createReadStream(filePath);
  readStream.on('open', function() {
    readStream.pipe(res);
  })
>>>>>>> origin/master
})
server.listen(Number(portNumber));

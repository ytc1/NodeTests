
const fs = require('fs');
const http = require('http')
const portNumber = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer(function (req, res) {
  const readStream = fs.createReadStream(filePath);
  readStream.on('open', function() {
    readStream.pipe(res);
  })
})
server.listen(Number(portNumber));

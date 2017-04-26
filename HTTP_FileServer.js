
const fs = require('fs');
const http = require('http')
const portNumber = process.argv[2];

const dst;
const server = http.createServer(function (req, res) {
  const src = fs.createReadStream(process.argv[3]);
  src.pipe(dst)
  server.res(dst);
})
server.listen(Number(portNumber));

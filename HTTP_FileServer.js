var fs = require('fs');
var http = require('http')
var portNumber = process.argv[2];

var dst;
var server = http.createServer(function (req, res) {
  var src = fs.createReadStream(process.argv[3]);
  src.pipe(res)
})
server.listen(Number(portNumber));
// Offical Solution
//var http = require('http')
 //   var fs = require('fs')

  //  var server = http.createServer(function (req, res) {
//      res.writeHead(200, { 'content-type': 'text/plain' })

 //     fs.createReadStream(process.argv[3]).pipe(res)
  //  })

   // server.listen(Number(process.argv[2]))
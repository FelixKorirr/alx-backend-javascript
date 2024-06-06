const http = require('http');

const host = '127.0.0.1';
const port = 1245;

const myServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

myServer.listen(port, host, () => {
  console.log('...');
  console.log('press CTRL-C to quit');
});

const http = require('http');

const host = '127.0.0.1';
const port = 1245;

const myServer = http.createServer((req, res) => {
  res.end('Hello Holberton School!\n');
});

myServer.listen(port, host, () => {
  console.log('...');
  console.log('press CTRL-C to quit');
});

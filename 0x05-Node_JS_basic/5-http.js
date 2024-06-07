const http = require('http');
const countStudents = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 1245;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.write(`Number of students: ${data.myData.length}\n`);
        res.write(
          `Number of students in CS: ${
            data.csStudents.length
          }. List: ${data.csStudents.join(', ')}\n`
        );
        res.end(
          `Number of students in SWE: ${
            data.sweStudents.length
          }. List: ${data.sweStudents.join(', ')}`
        );
      })
      .catch((error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(error.message);
      });
  }
});

server.listen(port, host, () => {
  console.log(`Server running from http://${host}:${port}`);
  console.log('...........');
  console.log('press CTRL-C to quit');
});

module.exports = server;

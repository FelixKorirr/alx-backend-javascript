const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const host = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  await countStudents(process.argv[2])
    .then((data) => {
      res.write(`Number of students: ${data.myData.length}\n`);
      res.write(
        `Number of students in CS: ${
          data.csStudents.length
        }. List: ${data.csStudents.join(', ')}\n`,
      );
      res.write(
        `Number of students in SWE: ${
          data.sweStudents.length
        }. List: ${data.sweStudents.join(', ')}`,
      );
    })
    .catch((err) => res.write(err.message))
    .finally(() => {
      res.end();
    });
});

app.listen(port, host, () => {
  console.log(`Server running from http://${host}:${port}`);
  console.log('...........');
  console.log('press CTRL-C to quit');
});

module.exports = app;

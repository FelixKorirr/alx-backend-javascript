const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Read process failed!'));
      }

      const myData = [];
      const csStudents = [];
      const sweStudents = [];

      data.split('\n').forEach((line, index) => {
        if (index === 0) return;
        const lineArr = line.split(',');
        const myObj = {
          firstname: lineArr[0],
          lastname: lineArr[1],
          age: lineArr[2],
          field: lineArr[3],
        };
        myData.push(myObj);
      });

      for (const line of myData) {
        if (line.field === 'CS') {
          csStudents.push(line.firstname);
        } else if (line.field === 'SWE') {
          sweStudents.push(line.firstname);
        }
      }
      console.log(`Number of students: ${myData.length}`);
      console.log(
        `Number of students in CS: ${
          csStudents.length
        }. List: ${csStudents.join(', ')}`,
      );
      console.log(
        `Number of students in SWE: ${
          sweStudents.length
        }. List: ${sweStudents.join(', ')}`,
      );
      resolve();
    });
  });
}

module.exports = countStudents;

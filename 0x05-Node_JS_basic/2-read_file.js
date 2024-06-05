const fs = require('node:fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const items = fs.readFileSync(path, 'utf8');
  const myDATA = [];
  const CS = [];
  const SWE = [];
  items.split('\n').forEach((line, index) => {
    if (index === 0) {
      return;
    }
    const lineArr = line.split(',');
    const myObj = {
      firstname: lineArr[0],
      lastname: lineArr[1],
      age: lineArr[2],
      field: lineArr[3],
    };
    myDATA.push(myObj);
  });
  console.log(`Number of students: ${myDATA.length}`);

  for (const el of myDATA) {
    if (el.field === 'CS') {
      CS.push(el.firstname);
    } else if (el.field === 'SWE') {
      SWE.push(el.firstname);
    }
  }

  console.log(`Number of students in CS: ${CS.length}. List: ${CS}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE}`);
}

module.exports = countStudents;

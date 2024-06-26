const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const items = fs.readFileSync(path, 'utf8').trim();
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

  for (const el of myDATA) {
    if (el.field === 'CS') {
      CS.push(el.firstname);
    } else if (el.field === 'SWE') {
      SWE.push(el.firstname);
    }
  }

  console.log(`Number of students: ${myDATA.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(
    `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`,
  );
}

module.exports = countStudents;

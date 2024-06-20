const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = data
    .split('\r\n')
    .slice(1)
    .map((student) => student.split(','))
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));
  const fields = students.map((student) => student.field);
  const uniqueFields = new Set(fields);
  const studentsbyField = {};
  for (const field of uniqueFields) {
    studentsbyField[field] = [];
  }
  for (const student of students) {
    studentsbyField[student.field].push(student.firstName);
  }
  console.log(studentsbyField);
  return studentsbyField;
}

module.exports = countStudents;

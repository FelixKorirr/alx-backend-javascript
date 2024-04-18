export default function getStudentsByLocation(students, city) {
  const arr = students.filter((obj) => obj.location === city);
  return arr;
}

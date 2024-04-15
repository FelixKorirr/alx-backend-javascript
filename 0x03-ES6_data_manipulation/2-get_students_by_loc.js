export default function getStudentsByLocation(students, city) {
  const arr = students.filter((obj) => {
    if (obj.location === city) {
      return obj;
    }
    return 0;
  });
  return arr;
}

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prev, cur) => prev.id || prev + cur.id,
      0,
    );
  }
  return 0;
}

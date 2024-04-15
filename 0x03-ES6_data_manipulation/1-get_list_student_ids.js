export default function getListStudentsIds(myArg) {
  if (Array.isArray(myArg)) {
    const studentId = myArg.map((item) => item.id);
    return studentId;
  } else {
    return [];
  }
}

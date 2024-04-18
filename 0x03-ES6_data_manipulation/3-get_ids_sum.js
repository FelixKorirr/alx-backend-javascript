export default function getStudentIdsSum(myList) {
  const sum = myList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
}

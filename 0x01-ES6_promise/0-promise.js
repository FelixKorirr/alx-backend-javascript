export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const x = 5 + 3;
      if (x === 8) {
        resolve(true);
      } else {
        reject(new Error('value is not equal to 8'));
      }
    }, 2000);
  });
}

getResponseFromAPI().then((result) => {
  console.log(result);
}).catch((result) => {
  console.log(result);
});

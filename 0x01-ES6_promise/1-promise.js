export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  });
}

getFullResponseFromAPI().then((result) => {
  console.log(result);
}).catch((result) => {
  console.log(result);
});

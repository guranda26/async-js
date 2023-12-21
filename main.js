function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

mySetTimeout((delay = 3))
  .then(() => {
    console.log(`The timeout took ${delay} seconds`);
  })
  .catch((error) => (`Error:`, error));

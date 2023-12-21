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

// function makeToys() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.1) {
//       resolve("Undefected");
//     } else {
//       reject("Defected");
//     }
//   });
// }

async function makeToys() {
  if (Math.random() > 0.1) {
    resolve("Undefected");
  } else {
    reject("Defected");
  }
}

async function sellToys(status) {
  if (status === "Undefined") {
    if (Math.random() > 0.7) {
      resolve("Toy has been sold");
    } else {
      reject("Toy was unseccessful");
    }
  }
}
// function sellToys(status) {
//   return new Promise((resolve, reject) => {
//     if (status === "Undefined") {
//       if (Math.random() > 0.7) {
//         resolve("Toy has been sold");
//       } else {
//         reject("Toy was unseccessful");
//       }
//     }
//   });
// }
async function promisify() {
  try {
    const status = await makeToys();
    const result = await sellToys(status);
    console.log(result);
  } catch (error) {}
}
// makeToys()
//   .then((status) => sellToys(status))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

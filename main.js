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

function makeToys() {
  return new Promise((resolve, reject) => {
    mySetTimeout(3000)
      .then(() => {
        console.log("Undefected");
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function deliverToys() {
  return new Promise((resolve, reject) => {
    mySetTimeout(2000)
      .then(() => {
        console.log("Toy is successfully delivered");
        resolve();
      })
      .catch(() => {
        reject("Failed to deliver");
      });
  });
}

function sellToys(status) {
  return new Promise((resolve, reject) => {
    mySetTimeout(1000)
      .then(() => {
        if (status === "Undefected") {
          if (Math.random() > 0.5) {
            resolve();
            console.log("Toy has been sold");
          } else {
            reject("Toy was unsuccessfull");
          }
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function promisify() {
  makeToys()
    .then(() => deliverToys())
    .then(() => sellToys("Undefected"))
    .catch((error) => console.error("Error:", error));
}

async function makeToys2() {
  try {
    await mySetTimeout(3000);
    console.log("Undefected");
  } catch (error) {
    throw error;
  }
}
async function deliverToys2() {
  try {
    await mySetTimeout(2000);
    console.log("The second toy is successfully delivered");
  } catch (error) {
    throw new Error("failed to deliver");
  }
}

async function sellToys2(status) {
  try {
    await mySetTimeout(1000);
    if (status === "Undefected") {
      if (Math.random() > 0.5) {
        console.log("The second Toy has been sold");
      } else {
        console.log("Toy was unsuccessfull");
      }
    }
  } catch (error) {
    throw error;
  }
}

async function promisify2() {
  try {
    const status = await makeToys2();
    await deliverToys2();
    const result = await sellToys2("Undefected");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

promisify();
promisify2();

function squareSync(x){
  return x*x;
}
async function squareAsync1(x){
  return x*x;
}

async function divideAsync1(x, y){
  return x / y;
}

// This function is used to illustrate a aynschrone error
function divideAsync2(x, y){

  // Case 1
  // throw new Error('ceci est une erreur');

  // Case 2
  // return Promise.reject('ceci est une erreur');

  // Case 3
  return new Promise((resolve, reject) => {
    reject('ceci est une erreur')
  });

  return x / y;
}

function squareAsync2(x){
  return new Promise((resolve) => {
    resolve(x*x);
  });
}

/**
 * @throws {string} lève une exception en cas de ...
 */
async function setupListeners () {
  console.log('1');
  const x = 10;
  const y = squareSync(x);
  const promiseY1 = squareAsync1(x);
  promiseY1.then((delayedY1) => {
    console.log('delayedY1', delayedY1)
  })
  console.log('Y', y);

  const a = await promiseY1
  
  const z = a * await promiseY1 * await promiseY1;
  
  try {
    const z2 = await divideAsync2(x, 0);
    console.log('Z2', z2);
  } catch (error) {
    console.log("ERROR:", error)
  }

  console.log('Z', z);
}

window.addEventListener('load', setupListeners);

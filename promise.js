/* function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
      const sum = a + b;
  
      if(sum <= 5){
        resolve("Let's go!!")
      } else {
        reject(new Error('Oops!.. Number must be less than 5'))
      }
    })
  
    return customPromise
}

// consuming the promise
getSumNum(1, 3).then(data => {
    console.log(data)
})
  .catch(err => {
    console.log(err)
})

getSumNum(7, 3).then(data => {
    console.log(data)
})
  .catch(err => {
    console.log(err)
})

*/
// Chaining Promises:-

let val;

function getSumofNum(a, b) {
  const customPromise1 = new Promise((resolve, reject) => {
    const sum = a + b;

    if(sum < 5){
      resolve(sum)
    } else {
      reject(new Error('Oops!.. Number must be less than 5'))
    }
  })

  return customPromise1
}

getSumofNum(1, 3)
.then(data1 => {
  console.log("initial data: " + data1)
  val = data1 + 1 // modifying the returned data

  return val
})
.then(newData1 => {
  console.log("modified data: " + newData1)
})
.catch(err => {
  console.log(err)
})
  
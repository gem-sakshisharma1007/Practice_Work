const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
readFile('./promise1.txt', 'utf8') // Reading the .txt file
.then((text) => {
console.log(text);
})
// Log error if any
.catch((err) => {
console.log('Error', err);
});
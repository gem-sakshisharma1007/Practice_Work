const fs = require('fs')



function divideNumbers(a, b, callback) {
    if (b === 0) {
      callback(new Error('Cannot divide by zero'));
    } else {
      const result = a / b;
      callback(null, result);
    }
  }
  
  divideNumbers(10, 2, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result); // Output: 5
    }
  });
  
  divideNumbers(10, 0, (err, result) => {
    if (err) {
      console.error(err); // Output: Error: Cannot divide by zero
    } else {
      console.log(result);
    }
  });

  //example 2


  function readDataFromFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
  
  readDataFromFile('example.txt', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });


  //Chaining Callback

  function readFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
  
  function writeFile(filename, data, callback) {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        callback(err);
      } else {
        callback();
      }
    });
  }
  
  readFile('example.txt', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const newData = data.toUpperCase();
      writeFile('file2.txt', newData, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('File written successfully');
        }
      });
    }
  });
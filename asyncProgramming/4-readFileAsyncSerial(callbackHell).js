const fileSystem = require("fs");

fileSystem.readFile("f0.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data + "");
    fileSystem.readFile("f1.txt", function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data + "");
        fileSystem.readFile("f2.txt", function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data + "");
            fileSystem.readFile("f3.txt", function (err, data) {
              if (err) {
                console.log(err);
              } else {
                console.log((data +""));
              }
            });
          }
        });
      }
    });
  }
});
//these type of chained callbacks are known as *Callback Hell* or *Pyramid of Doom*.
// This type of structure known as callback hell is used to handle asynchronous operations in a serial manner,
// waiting for each file to be read before moving but it can be hard to read and maintain because of the nested structure.
// To avoid this, consider using Promises or async/await for better readability and maintainability
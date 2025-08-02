console.log("start");

const fileSystem = require("fs");

fileSystem.readFile("f1.txt", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data + "");
  }
});
fileSystem.readFile("f2.txt", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log("file2");
  }
});
fileSystem.readFile("f3.txt", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data + "");
  }
});

console.log("end");

// this gives random order of output due to async nature of readFile
// this is parellel execution of readFile calls
// *NOTE*
// function (err, data) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data+"");
//   }
// }
// these type of callback is known as *Error First Callbacks* means first argument is reserved for error so it handles error first.

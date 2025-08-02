
const fileSystem = require("fs");// synchronous file system operations
// this is synchronous call so it will block the execution of code until file is read 

console.log("start")

let data1 = fileSystem.readFileSync("f1.txt");// reading file synchronously
// this will block the execution until file is read

let data2 = fileSystem.readFileSync("f2.txt");

let data3 = fileSystem.readFileSync("f3.txt");

console.log(data1+" ")
console.log("data2")
console.log(data3)

console.log("end"+" ");
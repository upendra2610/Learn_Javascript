const fileSystem = require("fs");

console.log("start");

let readFile1 = fileSystem.promises.readFile("f0.txt");
let readFile2 = fileSystem.promises.readFile("f1.txt")
let readFile3 = fileSystem.promises.readFile("f2.txt")

//always gives random order
readFile1.then((data)=>{
    console.log("file data 1:- "+data);
}) .catch((err)=>{
    console.log("error in reading file 1: " + err);
})
readFile2.then((data)=>{
    console.log("file data 2:- "+data);
}) .catch((err)=>{
    console.log("error in reading file 2: " + err);
})
readFile3.then((data)=>{
    console.log("file data 3:- "+data);
}) .catch((err)=>{
    console.log("error in reading file 3: " + err);
})
console.log("end");
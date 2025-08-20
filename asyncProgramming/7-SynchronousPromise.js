const fileSystem = require("fs")

console.log("start")

let readFile1 = fileSystem.promises.readFile("f1.txt")

//concept of Promise Chaining
readFile1.then((data)=>{
    console.log("file data 1:- "+data)
    return fileSystem.promises.readFile("f2.txt")// to make get this out use return(returns promise)
    }).then((data2)=>{// this then for above return
        console.log("file data 2:- "+data2)
        return fileSystem.promises.readFile("f3.txt")// to make this out use return(returns promise)
    }).then((data3)=>{
        console.log("file data 3:- "+data3)
    }).catch((err)=>{
        console.error(err); 
    });
    //one catch statement is enough for all

//pros:-
    //1. we can handle errors at one place
    //2. we can avoid callback hell
    
//cons:-
    //1. Promise hell is still possible if we keep doing this for multiple files
    //  and less readable code and maintainability issues.


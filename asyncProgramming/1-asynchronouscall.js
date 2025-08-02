console.log("start");

function f1(){
    console.log("f1");

}

function f2(){
    console.log("f2");
}

setTimeout(f1,2000)//asynchronous call delayed by 2 seconds
// this is an example of asynchronous call using setTimeout
setTimeout(f2,1000)//asynchronous call delayed by 1 second
// which has less delay so it will execute first

console.log("end");
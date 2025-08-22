//An async function returns a promise, automatically wrapping non-promise values in a promise.

//type1.data wrapped in a promise
async function always() {
    return "Hello World"; // this is wrapped in a promise
}
let p = always(); // p is promise
p.then((data) => {
    console.log(data); // "Hello World"
});

//type2. return new instance of promise
let promise = new Promise((resolve, reject) => {
    resolve("Hello World");
});

async function asyncFunc() {
    return promise; // this is not wrapped promise inside promise, instead it returns the promise itself
}
let p1 = asyncFunc();
p1.then((data) => {
    console.log(data); // "Hello World"
});

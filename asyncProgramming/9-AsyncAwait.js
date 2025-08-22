//The combination of async and await is used to handle promises implicitly and no need to use "then" to resolve
//await can be used only inside an async function

let promise = new Promise((resolve, reject) => {
    resolve("Hello World");
});
async function hello() {
    let result = await promise;
    console.log(result);
}

hello(); // Hello World
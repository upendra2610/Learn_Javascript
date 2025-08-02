// simulating coin toss using promises

let promis1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const isHead = Math.random() >= 0.5;

    if (isHead) {
      resolve("It's Head we winn!");
    } else {
      reject("we got tails we loose...");
    }
  }, 2000);
});
// handling the promise

promis1.then(function (output) {
  console.log(output);
}); // works if promise is resolved

promis1.catch(function (failedoutput) {
  console.log(failedoutput);
}); // works if promise is rejected
// catch is build to give error thats why in output we get the error message

promis1.finally(function () {
  console.log("Promise setteled");
}); // this will always run regardless of the promise being resolved or rejected

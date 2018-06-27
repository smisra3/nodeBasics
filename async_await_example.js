/**
 * Creation of a single promise using asyc/await.
 */
(function () {
  var asynchronousFunction = async function () {
    console.log("First line of code for synchronous execution!!");
    var promise = await functionMakingPromise();
    console.log(promise);
  };
  function functionMakingPromise() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Promise Succesfully Resolved!!!");
      }, 1000)
    })
  };
  asynchronousFunction();
  console.log("Last line of code for synchronous execution");
})();

/**
 * Second Promise is called right after first is resolved.
 */
(function () {
  var asynchronousFunction = async function () {
    console.log("First line of code for synchronous execution!!");
    var promise1 = await functionMakingPromise1();
    var promise2 = await functionMakingPromise2();
    console.log(promise1);
    console.log(promise2);
  };
  function functionMakingPromise1() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Promise1 Succesfully Resolved!!!");
      }, 1000)
    })
  };
  function functionMakingPromise2() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Promise2 Succesfully Resolved!!!");
      }, 2000)
    })
  };
  asynchronousFunction();
  console.log("Last line of code for synchronous execution");
})();
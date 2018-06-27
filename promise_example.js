(function () {
    var myPromise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise Resolved'), 1500);
    });
    var myPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Second Promise is resolved now!!!', 2500));
    });
    myPromise1.then(data => {
        console.log(data);
        return data;
    }).then(data => {
        console.log(data + " Second time")
    }).catch(error => console.log("Error is", error));

    console.log("Promise Started");

    var promiseArr = [myPromise1, myPromise2]; // Order of promises determine the order of data recieved in the then of .all method
    Promise.all(promiseArr).then(data => console.log(data + " --- All Promises resolved."))
})();

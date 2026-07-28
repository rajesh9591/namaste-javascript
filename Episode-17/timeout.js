console.log("Program Started");

setTimeout(function () {
    console.log("setTimeout Callback");
}, 3000);

let start = Date.now();

while (Date.now() - start < 5000) {
    // Blocking the main thread
}

console.log("Program Finished");
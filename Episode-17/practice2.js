console.log("Start");

setTimeout(function () {
    console.log("Timeout");
}, 0);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("End");
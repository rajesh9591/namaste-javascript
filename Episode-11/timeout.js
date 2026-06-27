console.log("Start");
//Problem with var

console.log("Using var:");
for(var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}

//Solution using let

setTimeout(() => {
    console.log("Using let:");
    for(let j = 1; j <= 5; j++) {
        setTimeout(function() {
            console.log(j);
        }, j * 1000);
    }
}, 7000);

//Solution using closure

setTimeout(() => {
    console.log("Using Closure:");
    for(var k = 1; k <= 5; k++) {
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        close(k);
    }
}, 14000);

setTimeout(function() {
    console.log("End");
}, 20000);

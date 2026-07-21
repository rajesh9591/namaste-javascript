// Q1

function greet(callback) {
    callback();
}

greet(function () {
    console.log("Hello");
});

// Prediction:
// _________


// ----------------------


// Q2

function test() {

    let count = 0;

    return function () {
        count++;
        console.log(count);
    };

}

const x = test();

x();
x();

// Prediction:
// _________


// ----------------------


// Q3

setTimeout(function () {
    console.log("JavaScript");
}, 1000);

// Prediction:
// _________
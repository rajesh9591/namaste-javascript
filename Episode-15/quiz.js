// Q1

console.log("A");

setTimeout(function () {
    console.log("B");
}, 0);

console.log("C");

// Prediction:
// A
// C
// B


// ----------------------------


// Q2

console.log("Start");

setTimeout(function () {
    console.log("Inside");

}, 1000);

console.log("End");

// Prediction:
// Start
// End
// Inside(after 1 sec)


// ----------------------------


// Q3

function greet() {
    console.log("Hello");
}

setTimeout(greet, 1000);

console.log("JavaScript");

// Prediction:
// JavaScript
// Hello(after 1 sec)
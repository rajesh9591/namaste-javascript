// Question 1

console.log("Start");

setTimeout(function () {
    console.log("A");
}, 0);

console.log("End");

// Prediction:
// Start
//End
//A

// -----------------------------

// Question 2

console.log("1");

setTimeout(function () {
    console.log("2");
}, 1000);

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// Prediction:
// 1
//0
//1
//2
//2(after 1 second)

// -----------------------------

// Question 3

console.log("Hello");

setTimeout(function () {
    console.log("JavaScript");
}, 2000);

console.log("World");

// Prediction:
// Hello
//World
//JavaScript

//Question 4

console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 0);

setTimeout(() => {
    console.log("Timer 2");
}, 0);

console.log("End");

//Prediction:
//Start
//End
//Timer 1
//Timer 2
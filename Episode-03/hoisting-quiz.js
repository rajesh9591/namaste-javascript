
// Episode 03 - Hoisting Quiz
// Predict the output before running each question.

// ========================================
// Question 1
// ========================================

console.log(a);

var a = 10;

// Prediction:
// ______________________

// Actual Output:
// undefined

// ========================================
// Question 2
// ========================================

showMessage();

function showMessage() {
console.log("Hello JavaScript");
}

// Prediction:
// ______________________

// Actual Output:
// Hello JavaScript

// ========================================
// Question 3
// ========================================

console.log(x);

var x = 5;

console.log(x);

// Prediction:
// ______________________

// Actual Output:
// undefined
// 5

// ========================================
// Question 4
// ========================================

try {
sayHi();
} catch (error) {
console.log(error.message);
}

var sayHi = function () {
console.log("Hi");
};

// Prediction:
// ______________________

// Actual Output:
// TypeError

// ========================================
// Question 5
// ========================================

var num = 100;

function test() {
console.log(num);

var num = 10;

console.log(num);


}

test();

// Prediction:
// ______________________

// Actual Output:
// undefined
// 10

// ========================================
// Question 6
// ========================================

var b = 20;

function demo() {
console.log(b);


var b = 50;

function inner() {
    console.log(b);
}

inner();


}

demo();

// Prediction:
// ______________________

// Actual Output:
// undefined
// 50

// ========================================
// Question 7
// ========================================

var a = 10;

function outer() {
console.log(a);


var a = 20;

function inner() {
    console.log(a);
}

inner();


}

console.log(a);
outer();
console.log(a);

// Prediction:
// ______________________

// Actual Output:
// 10
// undefined
// 20
// 10

// ========================================
// Question 8
// ========================================

var x = 1;

function a() {
var x = 10;


function b() {
    console.log(x);
}

b();


}

a();
console.log(x);

// Prediction:
// ______________________

// Actual Output:
// 10
// 1

console.log("Hoisting Quiz Completed!");

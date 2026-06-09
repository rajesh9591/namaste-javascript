// Episode 03 - Hoisting Practice

// Example 1: Variable Hoisting

console.log(a);
var a = 10;

// Output:
// undefined

// -----------------------------

// Example 2: Function Hoisting

greet();

function greet() {
console.log("Hello JavaScript");
}

// Output:
// Hello JavaScript

// -----------------------------

// Example 3: Variable Before and After Assignment

console.log(x);

var x = 5;

console.log(x);

// Output:
// undefined
// 5

// -----------------------------

// Example 4: Function Expression

try {
sayHi();
} catch (error) {
console.log(error.message);
}

var sayHi = function () {
console.log("Hi");
};

// Output:
// sayHi is not a function

// -----------------------------

// Example 5: Local Variable Hoisting

var num = 100;

function test() {
console.log(num);


var num = 10;

console.log(num);


}

test();

// Output:
// undefined
// 10

// -----------------------------

// Example 6: Scope Chain

var value = 1;

function outer() {
var value = 10;


function inner() {
    console.log(value);
}

inner();


}

outer();

// Output:
// 10

// -----------------------------

// Example 7: Global vs Local Scope

var a = 10;

function demo() {
console.log(a);


var a = 20;

console.log(a);


}

console.log(a);
demo();
console.log(a);

// Output:
// 10
// undefined
// 20
// 10

// -----------------------------

console.log("Episode 03 Practice Completed!");

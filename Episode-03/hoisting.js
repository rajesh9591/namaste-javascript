// Episode 03 - Hoisting in JavaScript

console.log("===== Example 1: Variable Hoisting =====");

console.log(a);

var a = 10;

console.log(a);

// Output:
// undefined
// 10

// ==========================================

console.log("\n===== Example 2: Function Hoisting =====");

greet();

function greet() {
console.log("Hello JavaScript");
}

// Output:
// Hello JavaScript

// ==========================================

console.log("\n===== Example 3: Function Expression =====");

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

// ==========================================

console.log("\n===== Example 4: Local Variable Hoisting =====");

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

// ==========================================

console.log("\n===== Example 5: Global vs Local Scope =====");

var value = 1;

function demo() {
console.log(value);


var value = 50;

console.log(value);

}

console.log(value);
demo();
console.log(value);

// Output:
// 1
// undefined
// 50
// 1

// ==========================================

console.log("\n===== Example 6: Scope Chain =====");

var x = 1;

function outer() {
var x = 10;


function inner() {
    console.log(x);
}

inner();


}

outer();
console.log(x);

// Output:
// 10
// 1

console.log("\n===== Hoisting Examples Completed =====");
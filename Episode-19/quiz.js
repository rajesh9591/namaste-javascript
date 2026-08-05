```javascript
// ======================================================
// Episode 19 - map(), filter() & reduce()
// Quiz
// Predict the output before running the code.
// ======================================================

// ===========================================
// EASY LEVEL
// ===========================================

// Question 1

const numbers1 = [1, 2, 3];

const result1 = numbers1.map(num => num * 2);

console.log(result1);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 2

const numbers2 = [5, 10, 15, 20];

const result2 = numbers2.filter(num => num > 10);

console.log(result2);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 3

const numbers3 = [10, 20, 30];

const result3 = numbers3.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(result3);

// Prediction:
// ______________________________


// ===========================================
// MEDIUM LEVEL
// ===========================================

// Question 4

const names = ["raj", "amit", "neha"];

const result4 = names.map(name => name.toUpperCase());

console.log(result4);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 5

const numbers4 = [1, 2, 3, 4, 5];

const result5 = numbers4.filter(num => num % 2 === 0);

console.log(result5);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 6

const numbers5 = [1, 2, 3];

const result6 = numbers5.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log(result6);

// Prediction:
// ______________________________


// ===========================================
// CALLBACK QUESTIONS
// ===========================================

// Question 7

const numbers6 = [10, 20];

numbers6.map(function(value, index, array) {

    console.log(value);
    console.log(index);
    console.log(array.length);

});

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 8

const numbers7 = [100];

numbers7.map(function(cat, dog, elephant) {

    console.log(cat);
    console.log(dog);
    console.log(elephant);

});

// Prediction:
// ______________________________


// ===========================================
// INTERVIEW LEVEL
// ===========================================

// Question 9

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 15000 }
];

const result9 = products
    .filter(product => product.price > 5000)
    .map(product => product.name);

console.log(result9);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 10

const employees = [
    { name: "Raj", salary: 50000 },
    { name: "Amit", salary: 30000 },
    { name: "Neha", salary: 70000 }
];

const result10 = employees.reduce((acc, employee) => {
    return acc + employee.salary;
}, 0);

console.log(result10);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 11

const numbers8 = [1, 2, 3, 4];

const result11 = numbers8.reduce((acc, curr) => {

    acc.push(curr * 2);

    return acc;

}, []);

console.log(result11);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 12

const values = [0, 1, false, 2, "", "Hello"];

const result12 = values.filter(Boolean);

console.log(result12);

// Prediction:
// ______________________________


// ===========================================
// HARDEST LEVEL
// ===========================================

// Question 13

const fruits = ["Apple", "Banana", "Orange"];

const result13 = fruits.reduce((acc, fruit) => {

    acc[fruit] = fruit.length;

    return acc;

}, {});

console.log(result13);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 14

const people = [
    { name: "Raj", city: "Delhi" },
    { name: "Amit", city: "Mumbai" },
    { name: "Neha", city: "Delhi" }
];

const result14 = people.reduce((acc, person) => {

    if (!acc[person.city]) {

        acc[person.city] = [];

    }

    acc[person.city].push(person.name);

    return acc;

}, {});

console.log(result14);

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 15

const numbers9 = [10, 20, 30];

const result15 = numbers9
    .map(num => num + 10)
    .filter(num => num > 30)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result15);

// Prediction:
// ______________________________


// ===========================================
// BONUS (Function Parameters)
// ===========================================

// Question 16

function greet(first, second, third) {

    console.log(first);
    console.log(second);
    console.log(third);

}

greet("Hello");

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 17

function show(a, b) {

    console.log(a);
    console.log(b);

}

show("JavaScript", "React", "Node");

// Prediction:
// ______________________________


// --------------------------------------------------

// Question 18

function demo(x, y, z) {

    console.log(x);
    console.log(y);
    console.log(z);

}

demo("One", "Two");

// Prediction:
// ______________________________


// ======================================================
// End of Quiz
// ======================================================
```

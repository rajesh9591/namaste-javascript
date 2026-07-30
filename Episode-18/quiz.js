```javascript
// =======================================
// Predict the output before running
// =======================================

// Question 1

function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Rajesh"));
}

processUser(greet);

// Prediction:
// ______________________________


// ---------------------------------------

// Question 2

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));

// Prediction:
// ______________________________


// ---------------------------------------

// Question 3

const numbers = [1, 2, 3];

const result = numbers.map(function (num) {
    return num * 2;
});

console.log(result);

// Prediction:
// ______________________________


// ---------------------------------------

// Question 4

const numbers = [10, 20, 30];

numbers.forEach(function (num) {
    console.log(num);
});

// Prediction:
// ______________________________


// ---------------------------------------

// Question 5

function multiply(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiply(2);

console.log(double(5));

// Prediction:
// ______________________________
```

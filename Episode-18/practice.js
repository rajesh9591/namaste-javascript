```javascript
// =============================
// Practice 1: Basic Higher-Order Function
// =============================

function greet(name) {
    return "Hello, " + name;
}

function processUser(name, callback) {
    console.log(callback(name));
}

processUser("Rajesh", greet);

// Output:
// Hello, Rajesh


// =============================
// Practice 2: Area of Circle
// =============================

const radius = [1, 2, 3, 4];

function area(radius) {
    return Math.PI * radius * radius;
}

function calculate(arr, logic) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }

    return output;
}

console.log(calculate(radius, area));


// =============================
// Practice 3: Circumference
// =============================

function circumference(radius) {
    return 2 * Math.PI * radius;
}

console.log(calculate(radius, circumference));


// =============================
// Practice 4: Diameter
// =============================

function diameter(radius) {
    return 2 * radius;
}

console.log(calculate(radius, diameter));


// =============================
// Practice 5: Square Numbers
// =============================

const numbers = [1, 2, 3, 4, 5];

function square(num) {
    return num * num;
}

console.log(calculate(numbers, square));


// =============================
// Practice 6: Cube Numbers
// =============================

function cube(num) {
    return num * num * num;
}

console.log(calculate(numbers, cube));


// =============================
// Practice 7: Built-in Higher-Order Function
// =============================

const marks = [40, 55, 80, 90];

const result = marks.map(function (mark) {
    return mark + 5;
});

console.log(result);


// =============================
// Practice 8: Arrow Function
// =============================

const double = numbers.map((num) => num * 2);

console.log(double);
```

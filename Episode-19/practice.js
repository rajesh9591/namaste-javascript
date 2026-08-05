```javascript
// ======================================================
// Episode 19 - map(), filter() & reduce()
// Practice Solutions
// ======================================================

// ===========================================
// EASY LEVEL
// ===========================================

// Q1. Double every number using map()

const numbers1 = [2, 4, 6, 8];

const doubledNumbers = numbers1.map(number => number * 2);

console.log("Q1:", doubledNumbers);
// Output: [4, 8, 12, 16]

// --------------------------------------------------

// Q2. Convert every name to uppercase

const names = ["raj", "amit", "neha"];

const upperCaseNames = names.map(name => name.toUpperCase());

console.log("Q2:", upperCaseNames);
// Output: ["RAJ", "AMIT", "NEHA"]

// --------------------------------------------------

// Q3. Find the square of every number

const numbers2 = [1, 2, 3, 4];

const squaredNumbers = numbers2.map(number => number * number);

console.log("Q3:", squaredNumbers);
// Output: [1, 4, 9, 16]

// --------------------------------------------------

// Q4. Filter even numbers

const numbers3 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers3.filter(number => number % 2 === 0);

console.log("Q4:", evenNumbers);
// Output: [2, 4, 6]

// --------------------------------------------------

// Q5. Filter numbers greater than 50

const marks = [35, 70, 90, 45, 80];

const marksAbove50 = marks.filter(mark => mark > 50);

console.log("Q5:", marksAbove50);
// Output: [70, 90, 80]

// ===========================================
// MEDIUM LEVEL
// ===========================================

// Q6. Get only active users

const users = [
    { name: "Raj", active: true },
    { name: "Amit", active: false },
    { name: "Neha", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log("Q6:", activeUsers);

// --------------------------------------------------

// Q7. Get products costing more than ₹5000

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Phone", price: 15000 }
];

const expensiveProducts = products.filter(product => product.price > 5000);

console.log("Q7:", expensiveProducts);

// --------------------------------------------------

// Q8. Find total of all numbers

const numbers4 = [10, 20, 30, 40];

const totalSum = numbers4.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Q8:", totalSum);
// Output: 100

// --------------------------------------------------

// Q9. Multiply all numbers

const numbers5 = [1, 2, 3, 4];

const productOfNumbers = numbers5.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log("Q9:", productOfNumbers);
// Output: 24

// --------------------------------------------------

// Q10. Find total salary

const employees = [
    { name: "Raj", salary: 50000 },
    { name: "Amit", salary: 30000 },
    { name: "Neha", salary: 70000 }
];

const totalSalary = employees.reduce((accumulator, employee) => {
    return accumulator + employee.salary;
}, 0);

console.log("Q10:", totalSalary);
// Output: 150000

// ===========================================
// HARD LEVEL
// ===========================================

// Q11. Return only product names

const products2 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Phone", price: 20000 }
];

const productNames = products2.map(product => product.name);

console.log("Q11:", productNames);

// --------------------------------------------------

// Q12. Filter students with marks >= 75

const students = [
    { name: "Raj", marks: 90 },
    { name: "Amit", marks: 70 },
    { name: "Neha", marks: 80 }
];

const topStudents = students.filter(student => student.marks >= 75);

console.log("Q12:", topStudents);

// --------------------------------------------------

// Q13. Total price of products costing more than ₹5000

const products3 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Phone", price: 15000 }
];

const totalExpensivePrice = products3.reduce((accumulator, product) => {

    if (product.price > 5000) {
        return accumulator + product.price;
    }

    return accumulator;

}, 0);

console.log("Q13:", totalExpensivePrice);
// Output: 65000

// --------------------------------------------------

// Q14. Multiply even numbers by 10
// Solve ONLY using reduce()

const numbers6 = [1, 2, 3, 4, 5];

const evenNumbersMultiplied = numbers6.reduce((accumulator, currentValue) => {

    if (currentValue % 2 === 0) {
        accumulator.push(currentValue * 10);
    }

    return accumulator;

}, []);

console.log("Q14:", evenNumbersMultiplied);
// Output: [20, 40]

// --------------------------------------------------

// Q15. Count even numbers

const numbers7 = [2, 5, 8, 9, 10];

const evenNumberCount = numbers7.reduce((accumulator, currentValue) => {

    if (currentValue % 2 === 0) {
        return accumulator + 1;
    }

    return accumulator;

}, 0);

console.log("Q15:", evenNumberCount);
// Output: 3

// ===========================================
// INTERVIEW LEVEL
// ===========================================

// Q16. Build an object using reduce()

const fruits = [
    "Apple",
    "Banana",
    "Orange"
];

const fruitObject = fruits.reduce((accumulator, fruit) => {

    accumulator[fruit] = true;

    return accumulator;

}, {});

console.log("Q16:", fruitObject);

// --------------------------------------------------

// Q17. Group people by city

const people = [
    { name: "Raj", city: "Delhi" },
    { name: "Amit", city: "Mumbai" },
    { name: "Neha", city: "Delhi" },
    { name: "Priya", city: "Mumbai" },
    { name: "Riya", city: "Delhi" }
];

const peopleGroupedByCity = people.reduce((accumulator, person) => {

    if (!accumulator[person.city]) {
        accumulator[person.city] = [];
    }

    accumulator[person.city].push(person.name);

    return accumulator;

}, {});

console.log("Q17:", peopleGroupedByCity);

// ===========================================
// BONUS CHALLENGES
// ===========================================

// Q18. Remove all falsy values

const values = [
    0,
    1,
    false,
    2,
    "",
    "Hello",
    null,
    undefined,
    "JS"
];

const truthyValues = values.reduce((accumulator, currentValue) => {

    if (currentValue) {
        accumulator.push(currentValue);
    }

    return accumulator;

}, []);

console.log("Q18:", truthyValues);

// --------------------------------------------------

// Q19. Find highest number

const numbers8 = [10, 90, 35, 120, 60];

const highestNumber = numbers8.reduce((accumulator, currentValue) => {

    return currentValue > accumulator
        ? currentValue
        : accumulator;

});

console.log("Q19:", highestNumber);

// --------------------------------------------------

// Q20. Custom Question
// Find the average salary of employees

const employeeList = [
    { name: "Raj", salary: 50000 },
    { name: "Amit", salary: 30000 },
    { name: "Neha", salary: 70000 }
];

const averageSalary =
    employeeList.reduce((accumulator, employee) => {
        return accumulator + employee.salary;
    }, 0) / employeeList.length;

console.log("Q20:", averageSalary);
// Output: 50000

// ======================================================
// End of Episode 19 Practice
// ======================================================
```

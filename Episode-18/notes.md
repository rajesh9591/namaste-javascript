# Episode 18 – Higher-Order Functions ft. Functional Programming

# What is a Higher-Order Function (HOF)?

A **Higher-Order Function** is a function that:

* Takes one or more functions as arguments, **or**
* Returns another function.

Simply put:

> A function that works with another function is called a Higher-Order Function.

---

# Example

```javascript
function calculate(radius, logic) {
    return logic(radius);
}

function area(r) {
    return Math.PI * r * r;
}

console.log(calculate(5, area));
```

Here:

* `calculate()` → Higher-Order Function
* `area()` → Callback Function

---

# What is a Callback Function?

A **Callback Function** is a function passed as an argument to another function.

Example:

```javascript
function greet(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Rajesh");
}

process(greet);
```

Here:

* `greet()` is the callback.
* `process()` is the Higher-Order Function.

---

# Why Do We Use Higher-Order Functions?

Without HOF:

```javascript
area(radius)
circumference(radius)
diameter(radius)
```

A lot of similar code gets repeated.

With HOF:

```javascript
calculate(radius, logic)
```

Only the logic changes.

This reduces duplicate code.

---

# Functional Programming

Functional Programming is a programming style where functions are treated as values.

Functions can:

* Be stored in variables
* Be passed as arguments
* Be returned from other functions

---

# Advantages of Higher-Order Functions

* Reusable code
* Cleaner code
* Less duplication
* Easier maintenance
* Better readability

---

# Real-World Examples

JavaScript provides many built-in Higher-Order Functions:

```javascript
map()
filter()
reduce()
forEach()
sort()
find()
some()
every()
```

These methods either take callback functions or return processed results.

---

# Higher-Order Function vs Callback

| Higher-Order Function          | Callback Function        |
| ------------------------------ | ------------------------ |
| Receives or returns a function | Passed as an argument    |
| Controls the execution         | Performs a specific task |

Example:

```javascript
calculate(radius, area);
```

* `calculate()` → Higher-Order Function
* `area()` → Callback Function

---

# Interview Questions

## Q1. What is a Higher-Order Function?

A function that accepts another function as an argument or returns another function.

---

## Q2. What is a Callback Function?

A function passed into another function to be executed later.

---

## Q3. Why do we use Higher-Order Functions?

To reduce duplicate code, improve reusability, and make programs easier to maintain.

---

## Q4. Give examples of Higher-Order Functions in JavaScript.

* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* `find()`
* `sort()`

---

## Q5. Are all callback functions Higher-Order Functions?

No.

A callback function is **passed to** another function.

A Higher-Order Function is the function that **accepts** or **returns** a function.

---

# Memory Trick

```text
Higher-Order Function
        │
        ▼
Accepts Function
        │
        ▼
Callback Function
        │
        ▼
Executes Logic
```

---

# One-Line Revision

✓ Higher-Order Function = accepts or returns a function.

✓ Callback Function = passed as an argument.

✓ Higher-Order Functions reduce duplicate code.

✓ Functional Programming treats functions as values.

✓ `map()`, `filter()`, and `reduce()` are common Higher-Order Functions.

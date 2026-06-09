# Episode 03 - Hoisting in JavaScript

## What is Hoisting?

Hoisting is JavaScript's behavior of moving variable and function declarations to memory before code execution begins.

JavaScript creates memory for variables and functions during the Memory Creation Phase.

---

## Execution Context Phases

### 1. Memory Creation Phase

Memory is allocated for variables and functions.

Example:

```javascript
var a = 10;

function greet() {
    console.log("Hello");
}
```

Memory Phase:

```javascript
a = undefined
greet = function() {...}
```

### 2. Code Execution Phase

Values are assigned and code executes line by line.

```javascript
a = 10;
```

---

## Variable Hoisting

```javascript
console.log(a);

var a = 10;
```

Output:

```javascript
undefined
```

Reason:

```javascript
a = undefined
```

during the Memory Creation Phase.

---

## Function Hoisting

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```javascript
Hello
```

Reason:

The entire function is stored in memory before execution.

---

## Function Expression

```javascript
greet();

var greet = function() {
    console.log("Hello");
};
```

Output:

```javascript
TypeError: greet is not a function
```

Reason:

```javascript
greet = undefined
```

during the Memory Creation Phase.

The function value is assigned only during execution.

---

## Scope and Hoisting

```javascript
var a = 100;

function test() {
    console.log(a);

    var a = 10;

    console.log(a);
}

test();
```

Output:

```javascript
undefined
10
```

Reason:

The local variable `a` is hoisted inside the function.

Memory Phase of test():

```javascript
a = undefined
```

---

## Key Points

* Hoisting happens during the Memory Creation Phase.
* Variables declared with `var` are hoisted and initialized with `undefined`.
* Function declarations are fully hoisted.
* Function expressions are not fully hoisted.
* Local variables shadow global variables.
* JavaScript allocates memory before executing code.

---

## Interview Questions

### What is Hoisting?

Hoisting is JavaScript's behavior of allocating memory for variables and functions before code execution.

### Why does `console.log(a)` print undefined?

Because `var a` is hoisted and initialized as `undefined`.

### Are function declarations hoisted?

Yes. Function declarations are fully hoisted.

### Are function expressions hoisted?

The variable is hoisted, but the function value is not.

### What are the two phases of Execution Context?

1. Memory Creation Phase
2. Code Execution Phase

---

## Quick Revision

```javascript
console.log(a);
var a = 10;
```

Output:

```javascript
undefined
```

---

```javascript
sayHi();

function sayHi() {
    console.log("Hi");
}
```

Output:

```javascript
Hi
```

---

```javascript
sayHi();

var sayHi = function() {
    console.log("Hi");
}
```

Output:

```javascript
TypeError
```

---

## Summary

* JavaScript first creates memory.
* Variables get `undefined`.
* Functions get their complete definition.
* Code executes only after memory creation is complete.
* Understanding hoisting helps explain many interview questions and debugging scenarios.

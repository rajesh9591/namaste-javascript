# Episode 13 - First Class Functions ft. Anonymous Functions

## What are First Class Functions?

JavaScript treats functions as values.

Functions can:

1. Be assigned to variables
2. Be passed as arguments
3. Be returned from functions
4. Be stored in arrays and objects

Because of this, JavaScript has First Class Functions.

---

## Anonymous Function

An anonymous function is a function without a name.

Example:

```javascript
const x = function() {
    console.log("Hello");
};

x();
```

Output:

```text
Hello
```

---

## Why use Anonymous Functions?

Anonymous functions are commonly used:

* Callbacks
* Function expressions
* Event handlers
* setTimeout
* Closures

Example:

```javascript
setTimeout(function() {
    console.log("Hello");
}, 1000);
```

Here the function has no name.

---

## Function as Argument

```javascript
function greet(callback) {
    callback();
}

greet(function() {
    console.log("JavaScript");
});
```

Output:

```text
JavaScript
```

---

## Function Returning Function

```javascript
function outer() {

    return function() {
        console.log("Returned");
    };

}

const x = outer();

x();
```

Output:

```text
Returned
```

---

## Difference

Function Statement:

```javascript
function test() {
    console.log("Hello");
}
```

Function Expression:

```javascript
const test = function() {
    console.log("Hello");
};
```

Anonymous Function:

```javascript
function() {
    console.log("Hello");
}
```

Anonymous functions cannot exist alone.
They are usually used inside expressions.

---

## Quick Revision

Functions
↓
Assign
↓
Pass
↓
Return
↓
Anonymous Functions
↓
First Class Functions

Important:
function() {
   console.log("Hello");
}

This alone gives:

SyntaxError

Why?

Because JavaScript expects a function name in a function declaration.

Anonymous functions are usually used as:

const x = function() {};
setTimeout(function(){},1000);

not by themselves.
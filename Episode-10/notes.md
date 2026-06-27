# Episode 10 - Closures in JavaScript

## What is Closure?

A closure is a function bundled together with its lexical environment.

A function remembers variables from its outer scope even after the outer function finishes execution.

Example:

```javascript
function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

Reason:

`inner()` remembers `count` even after `outer()` finishes.

---

## Why Closures Work

When a function is returned, JavaScript does not destroy the variables used by that function.

Instead it keeps access to the lexical environment.

---

## Uses of Closures

1. Data hiding / encapsulation
2. Function factories
3. Callbacks
4. Event handlers
5. React hooks
6. Memoization

---

## Data Hiding Example

```javascript
function createCounter() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
```

Output:

```text
1
2
```

---

## Quick Revision

Function
↓
Returns function
↓
Inner function remembers outer variables
↓
Closure created


Closures do not store values.
Closures store references to variables in their lexical environment.

Example:

let a = 10;

function x() {
    console.log(a);
}

a = 50;

x();

Output:

50

because the closure uses the current value of a, not a copied snapshot.



outer()();

At first it looks strange because of the double ().

Let's break it:

function outer() {

    let a = 100;

    function inner() {
        console.log(a);
    }

    return inner;
}

outer()();

Step by step:

Step 1:

outer()

This executes outer().

But outer() does not return a number or string.

It returns a function:

return inner;

So after execution:

outer()

becomes:

function inner() {
    console.log(a);
}

Now the code effectively becomes:

(function inner() {
    console.log(a);
})();

The second () immediately calls that returned function.

So:

outer()()

means:

Call outer()
↓
Get back inner function
↓
Immediately call inner()

Equivalent code written separately:

const x = outer();

x();

Both give:

100

This pattern is very common later with:

Closures
Function factories
Higher-order functions
React patterns

Quick note for your notes.md:

outer()()

First () → execute outer function
Second () → execute returned function
# Episode 04 - Functions and Variable Environments

## What is a Function?

A function is a reusable block of code that performs a specific task.

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

---

## Function Invocation

Calling a function:

```javascript
greet();
```

When a function is invoked, JavaScript creates a new Execution Context.

---

## Variable Environment

Each Execution Context has its own variable environment.

Variables declared inside a function are local to that function.

Example:

```javascript
function a() {
    var x = 10;
    console.log(x);
}

a();
```

Output:

```text
10
```

---

## Execution Context

Whenever a function is called:

1. Memory Creation Phase
2. Code Execution Phase

A new Execution Context is created and pushed onto the Call Stack.

---

## Call Stack

The Call Stack manages function execution.

Example:

```javascript
function a() {
    b();
}

function b() {
    console.log("Inside B");
}

a();
```

Call Stack:

```text
Global()
a()
b()
```

Then functions are removed after execution.

---

## Key Points

* Every function gets its own Execution Context.
* Every Execution Context has its own Variable Environment.
* Local variables are not accessible outside the function.
* Functions are executed using the Call Stack.
* After a function finishes, its Execution Context is removed.

---

## Interview Questions

1. What is an Execution Context?
2. What is a Variable Environment?
3. What happens when a function is invoked?
4. What is the Call Stack?
5. Why are local variables inaccessible outside a function?

---

## Summary

* Function call creates a new Execution Context.
* Each function has its own Variable Environment.
* Variables inside a function remain local.
* Call Stack manages execution order.

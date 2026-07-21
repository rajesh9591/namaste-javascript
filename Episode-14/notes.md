# Episode 14 - Callback Functions in JavaScript ft. Event Listeners

## What is a Callback Function?

A callback function is a function passed as an argument to another function, which is executed later.

Example:

```javascript
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Rajesh");
}

processUser(greet);
```

Output:

```text
Hello Rajesh
```

---

## Why are Callback Functions Important?

Callbacks allow JavaScript to:

* Execute code later
* Handle asynchronous operations
* Respond to user actions
* Build reusable functions

---

## Callback Example

```javascript
function calculate(a, b, operation) {
    console.log(operation(a, b));
}

function add(x, y) {
    return x + y;
}

calculate(10, 20, add);
```

Output:

```text
30
```

---

## Event Listeners

An event listener waits for an event (such as a click or key press) and executes a callback function.

Example:

```javascript
document.getElementById("btn")
    .addEventListener("click", function () {
        console.log("Button Clicked");
    });
```

Here:

* `addEventListener()` is a browser method.
* The anonymous function is the callback.
* It runs only when the button is clicked.

---

## Closures and Event Listeners

The callback used in an event listener forms a closure.

Example:

```javascript
function attachEvent() {

    let count = 0;

    document.getElementById("btn")
        .addEventListener("click", function () {

            count++;
            console.log("Clicked", count, "times");

        });
}

attachEvent();
```

Every click updates the same `count` because the callback remembers its lexical environment.

---

## Quick Revision

Callback Function
↓
Passed to another function
↓
Executed later
↓
Used in setTimeout
↓
Used in Event Listeners
↓
Closures remember variables


One practical note:

The addEventListener examples won't run in Node.js because document exists only in a browser. For your GitHub repository, it's fine to include those examples in notes.md. If you want to execute them, create a simple HTML file with a button and link your JavaScript file, then open it in a browser.


## Introduction to DOM

**DOM (Document Object Model)** is the browser's representation of an HTML page.

JavaScript uses the DOM to:

* Access HTML elements
* Change content
* Change styles
* Handle user events

Example:

```javascript
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log("Button clicked");
});
```

Here:

* `document` represents the web page.
* `getElementById()` finds an HTML element.
* `addEventListener()` attaches a callback function that runs when the event occurs.

> **Note:** DOM APIs are available only in the browser, not in Node.js.

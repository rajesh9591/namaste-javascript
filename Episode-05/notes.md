# Episode 05 - Shortest JavaScript Program, window and this

## Shortest JavaScript Program

An empty JavaScript file is the shortest JavaScript program.

Even with an empty file, JavaScript creates:

1. Global Execution Context
2. Global Object
3. this keyword

---

## Global Object

In browsers, the global object is:

window

JavaScript automatically creates it.

Examples:

```javascript
console.log(window);
```

```javascript
console.log(this);
```

---

## Relationship between window and this

At global level:

```javascript
console.log(window === this);
```

Output:

```javascript
true
```

Because in the global scope of the browser:

* `this` points to `window`

---

## Global Variables

Variables declared with `var` become properties of the global object.

Example:

```javascript
var a = 10;

console.log(window.a);
console.log(this.a);
```

Output:

```javascript
10
10
```

---

## Important Points

* Empty JS file is also a valid JS program
* JavaScript creates Global Execution Context automatically
* Browser global object = window
* Global `this` refers to `window`
* `var` variables become properties of window

---

## Quick Revision

Empty file
↓
Global Execution Context created
↓
window object created
↓
this created



Quick Revision

Empty JS file
↓
Global Execution Context created
↓
Global Object created
↓
this keyword created

Browser:
window = global object
this → window

Node.js:
window does not exist
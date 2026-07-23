# Episode 15 - Asynchronous JavaScript & Event Loop

## Synchronous JavaScript

JavaScript executes one line at a time.

Example:

```javascript
console.log("Start");
console.log("Middle");
console.log("End");
```

Output:

```
Start
Middle
End
```

---

## Asynchronous JavaScript

Some operations take time (timers, network requests, user events).

JavaScript does not wait for them.

Example:

```javascript
console.log("Start");

setTimeout(function () {
    console.log("Inside Timeout");
}, 2000);

console.log("End");
```

Output:

```
Start
End
Inside Timeout
```

---

## JavaScript Runtime

The runtime consists of:

* JavaScript Engine
* Web APIs (Browser)
* Callback Queue
* Event Loop

---

## Web APIs

Browser provides APIs like:

* setTimeout()
* DOM
* fetch()
* addEventListener()

These are **not part of the JavaScript language**.

---

## Callback Queue

When an asynchronous task completes, its callback moves to the Callback Queue.

Example:

```
setTimeout finishes
        ↓
Callback Queue
```

---

## Event Loop

The Event Loop continuously checks:

1. Is the Call Stack empty?
2. If yes, move the first callback from the Callback Queue to the Call Stack.

---

## Execution Flow

```
Call Stack
        ↓
Web API
        ↓
Callback Queue
        ↓
Event Loop
        ↓
Call Stack
```

---

## Important Points

* JavaScript is single-threaded.
* The browser provides Web APIs.
* The Event Loop coordinates asynchronous execution.
* Callback functions execute only when the Call Stack is empty.


# Episode 15 - Asynchronous JavaScript & Event Loop

## JavaScript Runtime

```text
                    JavaScript Runtime (Browser)

+----------------------------------------------------------+
|                                                          |
|   +-------------+        +----------------------------+   |
|   | Call Stack  |        |        Web APIs            |   |
|   |-------------|        |----------------------------|   |
|   | greet()     |        | setTimeout()               |   |
|   | console.log |        | DOM                        |   |
|   |             |        | fetch()                    |   |
|   +-------------+        | addEventListener()         |   |
|                          +----------------------------+   |
|                                      |                   |
|                                      | Callback Ready    |
|                                      v                   |
|                          +----------------------------+   |
|                          |     Callback Queue         |   |
|                          +----------------------------+   |
|                                      |                   |
|                                      | Event Loop        |
|                                      v                   |
|                          +----------------------------+   |
|                          |     Moves callback         |   |
|                          |   to Call Stack (only      |   |
|                          |   when stack is empty)     |   |
|                          +----------------------------+   |
|                                                          |
+----------------------------------------------------------+
```

---

## Flow of Execution

```text
console.log("Start")
        │
        ▼
Call Stack
        │
        ▼
Printed immediately

setTimeout(...)
        │
        ▼
Web API starts timer
        │
        ▼
Call Stack continues

console.log("End")
        │
        ▼
Printed immediately

(Timer finishes)
        │
        ▼
Callback Queue
        │
        ▼
Event Loop checks:
"Is Call Stack empty?"
        │
        ▼
YES
        │
        ▼
Move callback to Call Stack
        │
        ▼
console.log("Inside Timeout")
```

---

## Memory Trick

```text
Call Stack
      ↓
Web API
      ↓
Callback Queue
      ↓
Event Loop
      ↓
Call Stack
```

---

## Interview Points

✓ JavaScript is single-threaded.

✓ Web APIs are provided by the browser.

✓ setTimeout() is handled by Web APIs.

✓ The callback waits in the Callback Queue.

✓ The Event Loop moves the callback to the Call Stack only when the Call Stack is empty.


Synchronous Code
        ↓
Call Stack Empty?
        ↓
YES
        ↓
Event Loop
        ↓
Callback Queue
        ↓
Callback Executes


Predict the output:

console.log("1");

setTimeout(() => console.log("2"), 0);

console.log("3");

setTimeout(() => console.log("4"), 0);

console.log("5");

o/p- 
1
3
5
2
4

why?

Synchronous Code

console.log("1")   → 1
setTimeout(2)      → Web API
console.log("3")   → 3
setTimeout(4)      → Web API
console.log("5")   → 5

--------------------------------

Call Stack Empty
        │
        ▼
Event Loop
        │
        ▼
Callback Queue

2
↓
4

Output:

1
3
5
2
4

JavaScript Runtime

                Browser
+---------------------------------------------------------+
|                                                         |
|  Call Stack                                             |
|       │                                                 |
|       ▼                                                 |
|  Web APIs                                               |
|  ├── setTimeout()                                       |
|  ├── fetch()                                            |
|  ├── DOM APIs                                           |
|  └── addEventListener()                                 |
|       │                                                 |
|       ├──────────────► Callback Queue                   |
|       │                                                 |
|       └──────────────► Microtask Queue                  |
|                           ▲                             |
|                           │                             |
|                    Promise.then()                       |
|                    fetch().then()                       |
|                                                         |
|                 Event Loop                              |
|                      │                                  |
|                      ▼                                  |
|     1. Check Microtask Queue first                      |
|     2. Then check Callback Queue                        |
|                                                         |
+---------------------------------------------------------+

Priority Order

1️⃣ Call Stack
        ↓
2️⃣ Microtask Queue
        ↓
3️⃣ Callback Queue

The Microtask Queue always has higher priority than the Callback Queue.

Example
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

Output:

Start
End
Promise
Timeout
Why?
Call Stack
↓

Start
↓

End
↓

Call Stack Empty
↓

Microtask Queue
Promise
↓

Callback Queue
Timeout

Even though setTimeout(..., 0) was registered first, the Promise callback runs first because the Event Loop always empties the Microtask Queue before processing the Callback Queue.

What is fetch()?

The fetch() function is used to make HTTP requests.

Example:

fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data));

The browser handles the network request using a Web API.

When the response arrives:

The Promise is resolved.
The .then() callback is placed in the Microtask Queue.
The Event Loop runs it before any pending callbacks in the Callback Queue.


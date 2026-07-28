# Episode 17 – Trust Issues with setTimeout()

## What is setTimeout()?

`setTimeout()` is a Browser Web API used to schedule a callback function after a specified delay.

**Syntax**

```javascript
setTimeout(callbackFunction, delayInMilliseconds);
```

Example:

```javascript
console.log("Start");

setTimeout(function () {
    console.log("Hello");
}, 2000);

console.log("End");
```

Output:

```
Start
End
Hello
```

---

# Why is this episode called "Trust Issues with setTimeout()"?

Many beginners believe:

```javascript
setTimeout(callback, 5000);
```

means

> "The callback will execute exactly after 5 seconds."

This is **NOT true**.

The correct meaning is:

> **The callback will not execute before 5 seconds.**

It executes only when:

* The timer has completed.
* The Call Stack is empty.

---

# How setTimeout() Works

```
JavaScript Code
       │
       ▼
setTimeout(callback, 5000)
       │
       ▼
Browser Web API
(Timer Starts)
       │
       ▼
5 Seconds Complete
       │
       ▼
Callback Queue
       │
       ▼
Event Loop
       │
       ▼
Is Call Stack Empty?
       │
   Yes ▼
Call Stack
       │
       ▼
Callback Executes
```

---

# Why Doesn't setTimeout() Execute Exactly on Time?

Suppose:

```javascript
setTimeout(callback, 5000);
```

If JavaScript is still executing synchronous code after 5 seconds, the callback must wait.

Example:

```javascript
console.log("Start");

setTimeout(function () {
    console.log("Timeout");
}, 5000);

let start = Date.now();

while (Date.now() - start < 10000) {
    // Blocking the main thread
}

console.log("Finished");
```

Output:

```
Start
Finished
Timeout
```

Although the timer was 5 seconds, the callback executed after about 10 seconds because the Call Stack was busy.

---

# Blocking the Main Thread

JavaScript is **single-threaded**.

It executes one task at a time.

If one task takes a long time, every other task must wait.

This is called **blocking the main thread**.

---

# Event Loop Rule

The Event Loop checks two conditions:

1. Has the timer finished?
2. Is the Call Stack empty?

Only when **both** are true is the callback moved to the Call Stack.

---

# Important Points

* `setTimeout()` is a Browser Web API.
* The timer runs outside the JavaScript engine.
* The callback waits in the Callback Queue.
* The Event Loop moves the callback to the Call Stack.
* A busy Call Stack delays callback execution.

---

# Real-Life Analogy

Imagine you order food with a 20-minute delivery time.

After 20 minutes, the delivery person reaches your house.

But if you are still in a meeting, you cannot receive the order immediately.

You receive it only after the meeting ends.

Similarly:

* Timer = Delivery time
* Call Stack = Your meeting
* Event Loop = The person checking whether you're free

---

# Interview Questions

## Q1. Does `setTimeout(fn, 5000)` guarantee execution after exactly 5 seconds?

**Answer:**

No.

It guarantees the callback **will not execute before 5 seconds**, but it may execute later if the Call Stack is busy.

---

## Q2. Why can `setTimeout()` be delayed?

Because:

* JavaScript is single-threaded.
* The Call Stack may still be executing synchronous code.
* The Event Loop waits until the Call Stack becomes empty.

---

## Q3. Who manages the timer?

The **Browser Web API** manages the timer.

---

## Q4. Who executes the callback?

The **JavaScript Engine** executes the callback after the Event Loop moves it from the Callback Queue to the Call Stack.

---

# Memory Trick

```
setTimeout()
      │
      ▼
Browser Web API
      │
      ▼
Timer Finished
      │
      ▼
Callback Queue
      │
      ▼
Event Loop
      │
      ▼
Call Stack Empty?
      │
      ▼
Execute Callback
```

---

# One-Line Revision

✓ `setTimeout()` is a Browser Web API.

✓ Delay is the **minimum waiting time**, not the exact execution time.

✓ Callback executes only after the Call Stack becomes empty.

✓ JavaScript is single-threaded.

✓ Blocking synchronous code delays asynchronous callbacks.

✓ Event Loop coordinates callback execution.

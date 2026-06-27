# Episode 11 - setTimeout + Closures Interview Questions

## setTimeout()

setTimeout() executes a function after a specified delay.

Syntax:

```javascript
setTimeout(function() {
    console.log("Hello");
}, 2000);
```

Output after 2 seconds:

```text
Hello
```

---

## Closures with setTimeout

Example:

```javascript
function x() {

    for(var i = 1; i <= 5; i++) {

        setTimeout(function() {
            console.log(i);
        }, i * 1000);

    }

}

x();
```

Output:

```text
6
6
6
6
6
```

Why?

The callback function forms a closure.

All callbacks share the same `i` variable.

When setTimeout executes later, the loop has already finished and:

```text
i = 6
```

---

## Solution using let

```javascript
function x() {

    for(let i = 1; i <= 5; i++) {

        setTimeout(function() {
            console.log(i);
        }, i * 1000);

    }

}

x();
```

Output:

```text
1
2
3
4
5
```

Reason:

`let` creates a new block-scoped variable for every iteration.

---

## Solution using Closure

```javascript
function x() {

    for(var i = 1; i <= 5; i++) {

        function close(x) {

            setTimeout(function() {
                console.log(x);
            }, x * 1000);

        }

        close(i);
    }

}

x();
```

Output:

```text
1
2
3
4
5
```

---

## Quick Revision

setTimeout
↓
Callback function
↓
Closure created
↓
Remembers variables


var → one shared box → 6 6 6 6 6

let → new box every iteration → 1 2 3 4 5

Closure solution:
Create new variable x for each iteration

Callback Function:
A function passed as an argument to another function,
which is executed later.
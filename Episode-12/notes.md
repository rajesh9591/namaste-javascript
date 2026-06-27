# Episode 12 - Crazy JS Interview Questions

## Important Learning

JavaScript interview questions often combine multiple concepts.

Do not solve by guessing.

Follow this order:

1. Check scope
2. Check hoisting
3. Check closures
4. Check execution flow
5. Check async behavior

---

## Example 1

```javascript
var x = 1;

a();

b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}
```

Output:

```text
10
100
1
```

---

## Example 2

```javascript
function x() {

    for(var i = 1; i <= 3; i++) {

        setTimeout(function() {
            console.log(i);
        },1000);

    }

}

x();
```

Output:

```text
4
4
4
```

Reason:

All callbacks share the same variable.

---

## Example 3

```javascript
let a = 10;

{
    let a = 20;

    console.log(a);
}

console.log(a);
```

Output:

```text
20
10
```

---

## Quick Rule

Never predict output quickly.

Trace:

Current Scope
↓
Parent Scope
↓
Execution
↓
Async behavior

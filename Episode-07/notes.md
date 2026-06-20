# Episode 07 - Scope Chain, Scope & Lexical Environment

## Scope

Scope determines where variables and functions can be accessed.

Types:

1. Global Scope
2. Local Scope (Function Scope)

Example:

```javascript
var a = 10; // Global

function test() {
    var b = 20; // Local
}

console.log(a);
```

---

## Lexical Environment

Lexical means "physical location in code".

JavaScript determines variable access based on where functions are written in the code.

Example:

```javascript
function a() {
    var x = 10;

    function b() {
        console.log(x);
    }

    b();
}

a();
```

Output:

```text
10
```

`b()` can access `x` because it is written inside `a()`.

---

## Scope Chain

If JavaScript cannot find a variable inside current scope:

1. Check local scope
2. Check parent scope
3. Check global scope
4. If not found → ReferenceError

---

## Important Points

* Inner functions can access outer variables
* Outer functions cannot access inner variables
* JavaScript searches upward through scope chain
* Scope depends on lexical position

---

## Quick Revision

Current Scope
↓
Parent Scope
↓
Global Scope
↓
ReferenceError

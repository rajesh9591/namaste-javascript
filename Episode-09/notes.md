# Episode 09 - Block Scope & Shadowing

## Block Scope

A block is code inside curly braces:

```javascript
{
   // block
}
```

Variables declared with `let` and `const` are block scoped.

Example:

```javascript
{
    let a = 10;
    const b = 20;

    console.log(a);
    console.log(b);
}

console.log(a);
```

Output:

```text
10
20
ReferenceError
```

Because `a` and `b` exist only inside the block.

---

## var and Block

`var` is not block scoped.

Example:

```javascript
{
    var x = 100;
}

console.log(x);
```

Output:

```text
100
```

Reason:

`var` attaches to function/global scope, not block scope.

---

## Shadowing

Inner variables can hide outer variables.

Example:

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

The inner `a` shadows the outer `a`.

---

## Illegal Shadowing

Wrong:

```javascript
let a = 10;

{
    var a = 20;
}
```

Output:

```text
SyntaxError
```

Reason:

`var` tries to shadow a `let` variable in the same scope chain.

---

## Quick Revision

var
→ function scope

let
→ block scope

const
→ block scope

Shadowing
→ inner variable hides outer variable


Block Scope:
Exists only inside {}

Shadowing:
Inner variable hides outer variable

Illegal Shadowing:
let a = 10;

{
   var a = 20;
}
// SyntaxError
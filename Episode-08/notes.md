# Episode 08 - let, const and Temporal Dead Zone

## let

Variables declared with `let` can be reassigned but cannot be redeclared in the same scope.

Example:

```javascript
let a = 10;

a = 20;

console.log(a);
```

Output:

```text
20
```

---

## const

Variables declared with `const` cannot be reassigned.

Example:

```javascript
const PI = 3.14;

console.log(PI);
```

Output:

```text
3.14
```

Wrong:

```javascript
const PI = 3.14;

PI = 3.14159;
```

Output:

```text
TypeError
```

---

## Temporal Dead Zone (TDZ)

The time between memory allocation and initialization of a variable.

Example:

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError:
Cannot access 'a' before initialization
```

---

## Difference between var, let, const

var:

* Can redeclare
* Can reassign
* Hoisted with undefined

let:

* Cannot redeclare
* Can reassign
* Hoisted but in TDZ

const:

* Cannot redeclare
* Cannot reassign
* Hoisted but in TDZ

---

## Quick Revision

var
↓
undefined

let / const
↓
Temporal Dead Zone
↓
initialized later


var
→ Hoisted + undefined

let
→ Hoisted + TDZ

const
→ Hoisted + TDZ + cannot reassign
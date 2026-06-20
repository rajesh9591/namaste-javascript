# Episode 06 - Undefined vs Not Defined

## Undefined

undefined is a special value given by JavaScript.

When memory is allocated to a variable but no value is assigned:

```javascript
var a;

console.log(a);
```

Output:

```text
undefined
```

JavaScript reserves memory and stores:

```text
a → undefined
```

---

## Not Defined

When JavaScript cannot find a variable in memory:

```javascript
console.log(x);
```

Output:

```text
ReferenceError: x is not defined
```

Because JavaScript never found `x`.

---

## Difference

Undefined:

```javascript
var a;
console.log(a);
```

Output:

```text
undefined
```

Not Defined:

```javascript
console.log(b);
```

Output:

```text
ReferenceError
```

---

## Important Points

* JavaScript allocates memory before execution
* Variables get `undefined` initially
* `undefined` is not an error
* `not defined` produces an error
* Avoid manually assigning `undefined`

Avoid this:

var a = undefined;

Preferred:

var a;

Because JavaScript already assigns undefined automatically. If you manually assign it, later it becomes harder to know:

Was it JavaScript?
or
Did I assign it?

---

## Quick Revision

undefined
↓
Variable exists
↓
No value assigned

not defined
↓
Variable does not exist
↓
ReferenceError

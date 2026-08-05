# 📘 Episode 19 – map(), filter() & reduce()

**Course:** Namaste JavaScript
**Status:** ✅ Completed

---

# Array Higher-Order Functions

## What is a Higher-Order Function?

A Higher-Order Function is a function that:

* Accepts another function as an argument.
* Returns another function.
* Or both.

Examples:

* `map()`
* `filter()`
* `reduce()`
* `forEach()`

---

# Why do we use them?

Instead of writing loops manually, Higher-Order Functions provide a cleaner, shorter, and more readable way to work with arrays.

---

# Callback Function

A callback function is simply a function passed as an argument to another function.

Example:

```javascript
numbers.map(function(num) {
    return num * 2;
});
```

Here,

* `map()` → Higher-Order Function
* `function(num){...}` → Callback Function

---

# How does map() know currentValue, index and array?

Example:

```javascript
numbers.map(function(currentValue, index, array) {

});
```

Many beginners think JavaScript automatically knows these values.

**That's NOT what happens.**

Actually, **`map()` itself calls your callback function**.

Internally, it behaves like this:

```javascript
function myMap(array, callback){

    let result = [];

    for(let i=0;i<array.length;i++){

        result.push(

            callback(
                array[i],
                i,
                array
            )

        );

    }

    return result;

}
```

So JavaScript automatically calls:

```javascript
callback(
    currentValue,
    index,
    originalArray
);
```

That is why your callback receives:

* currentValue
* index
* array

---

# Function Parameters vs Arguments

Remember:

Parameters

```javascript
function greet(a,b){

}
```

Arguments

```javascript
greet(10,20);
```

JavaScript always matches

**Arguments → Parameters**

by **position**, not by name.

---

# Parameter Names Don't Matter

These are exactly the same:

```javascript
function(a,b,c){}
```

```javascript
function(cat,dog,elephant){}
```

JavaScript assigns values based on position.

Example:

```javascript
callback(
    100,
    0,
    [100]
);
```

becomes

```text
cat = 100

dog = 0

elephant = [100]
```

---

# Important Rules About Arguments

## Case 1

Arguments > Parameters

Example

```javascript
function greet(a,b){}

greet("Hello","Raj","JS");
```

Result

```text
a = Hello

b = Raj
```

Extra arguments are ignored.

---

## Case 2

Arguments < Parameters

```javascript
function greet(a,b,c){}

greet("Hello");
```

Result

```text
a = Hello

b = undefined

c = undefined
```

Missing arguments become `undefined`.

---

# map()

## Definition

Transforms every element of an array and returns a **new array**.

**Rule:**

Transform every element → Use `map()`.

---

## Syntax

```javascript
array.map((currentValue, index, array) => {

    return transformedValue;

});
```

---

## Returns

✅ New Array

❌ Does NOT modify the original array.

---

## Example

```javascript
const numbers=[1,2,3];

const doubled=numbers.map(num=>num*2);
```

Output

```javascript
[2,4,6]
```

---

## Internal Working

| Iteration | Current Value | Returned |
| --------: | ------------: | -------: |
|         1 |             1 |        2 |
|         2 |             2 |        4 |
|         3 |             3 |        6 |

Final Output

```javascript
[2,4,6]
```

---

## Real-Life Example

Student Marks

```text
50

60

70

↓

55

65

75
```

---

## Project Example

Convert prices

```javascript
products.map(product=>product.price*80);
```

---

## Time Complexity

O(n)

---

## Common Mistakes

❌ Thinking `map()` changes the original array.

It doesn't.

---

# filter()

## Definition

Returns only those elements that satisfy a condition.

**Rule:**

Need to select matching elements → Use `filter()`.

---

## Syntax

```javascript
array.filter((currentValue,index,array)=>{

    return condition;

});
```

---

## Returns

New Array

May be smaller.

May even be empty.

---

## Example

```javascript
const even=numbers.filter(num=>num%2===0);
```

Output

```javascript
[2,4]
```

---

## Truthy & Falsy

`filter()` keeps values returning **true**.

Falsy values

* false
* 0
* ""
* null
* undefined
* NaN

---

## Time Complexity

O(n)

---

# reduce()

## Definition

Combines multiple values into one final result.

**Rule:**

Many → One

---

## Syntax

```javascript
array.reduce((accumulator,currentValue)=>{

    return accumulator;

},initialValue);
```

---

## Important Terms

Accumulator

Running result.

Current Value

Current array element.

Initial Value

Starting value.

---

## Initial Value Guide

Addition

```javascript
0
```

Multiplication

```javascript
1
```

Array

```javascript
[]
```

Object

```javascript
{}
```

---

## Example

```javascript
const sum=numbers.reduce((acc,current)=>{

    return acc+current;

},0);
```

---

## Internal Working

| Iteration | Accumulator | Current | Result |
| --------: | ----------: | ------: | -----: |
|         1 |           0 |      10 |     10 |
|         2 |          10 |      20 |     30 |
|         3 |          30 |      30 |     60 |

---

## reduce() can replace map()

```javascript
numbers.reduce((acc,current)=>{

    acc.push(current*2);

    return acc;

},[]);
```

---

## reduce() can replace filter()

```javascript
numbers.reduce((acc,current)=>{

    if(current%2===0){

        acc.push(current);

    }

    return acc;

},[]);
```

---

## Time Complexity

O(n)

---

# Comparison Table

| Feature        | map()     | filter()  | reduce()  |
| -------------- | --------- | --------- | --------- |
| Purpose        | Transform | Select    | Combine   |
| Returns        | New Array | New Array | Any Value |
| Original Array | Unchanged | Unchanged | Unchanged |

---

# Which One Should I Use?

Need to transform?

↓

map()

---

Need to select?

↓

filter()

---

Need one final result?

↓

reduce()

---

# Interview Tips

✔ `map()` transforms every element.

✔ `filter()` selects matching elements.

✔ `reduce()` combines multiple values into one.

✔ Parameter names never matter.

✔ JavaScript matches arguments to parameters by position.

✔ Missing arguments become `undefined`.

✔ Extra arguments are ignored.

✔ `map()` calls your callback and automatically passes:

* currentValue
* index
* original array

---

# Common Mistakes

❌ Forgetting `return` inside `map()`.

❌ Returning objects instead of booleans in `filter()`.

❌ Forgetting the initial value in `reduce()`.

❌ Forgetting to return the accumulator.

---

# Quick Revision

```text
map()

Many

↓

Many (Transformed)

----------------------

filter()

Many

↓

Some (Selected)

----------------------

reduce()

Many

↓

One Final Result
```

---

# One-Line Definitions

**map()**

Transforms every element and returns a new array.

**filter()**

Returns only elements that satisfy a condition.

**reduce()**

Combines multiple values into one final result.

---

# Golden Rules ⭐

1. Functions receive only the arguments passed by the caller.

2. JavaScript matches arguments to parameters by position, not by parameter name.

3. `map()`, `filter()`, and `reduce()` call your callback automatically.

4. Choose the method based on your intent:

* Transform → `map()`
* Select → `filter()`
* Combine → `reduce()`

# Episode 19 - map(), filter() & reduce()

> Namaste JavaScript
> Author: Rajesh Kumar
> Status: Completed ✅

---

# Array Higher-Order Functions

## What are Higher-Order Functions?

A Higher-Order Function is a function that:
- Takes another function as an argument.
- Returns another function.
- Or both.

Example:

```javascript
numbers.map(callback);
```

Here,
- map() is the Higher-Order Function.
- callback is the function passed to map().

---

# Why do we need them?

Without these methods, we would have to use loops repeatedly.

Example:

Without map()

```javascript
const numbers = [1,2,3];
const result = [];

for(let i=0;i<numbers.length;i++){
    result.push(numbers[i] * 2);
}
```

With map()

```javascript
const result = numbers.map(num => num * 2);
```

Cleaner
Readable
Professional

---

# 1. map()

## Definition

map() creates a new array by transforming every element of the original array.

Original array is never modified.

---

## Syntax

```javascript
array.map(function(currentValue,index,array){

});
```

---

## Parameters

currentValue

Current element.

index

Current index.

array

Original array.

---

## Returns

Always returns a NEW ARRAY.

---

## Internal Working

Example

```javascript
const numbers=[1,2,3];

const result=numbers.map(num=>num*2);
```

Execution

Iteration 1

1 → 2

Iteration 2

2 → 4

Iteration 3

3 → 6

Final

```javascript
[2,4,6]
```

---

## Real-Life Example

Student Marks

Original

```text
50
60
70
```

Add Grace Marks

```text
55
65
75
```

---

## Project Example

Convert Product Prices

```javascript
prices.map(price=>price*80);
```

---

## Time Complexity

O(n)

---

## Common Mistakes

❌ Thinking map() changes original array.

It doesn't.

---

# When to use map()

Use map() when you want to transform every element.

---

# 2. filter()

## Definition

filter() returns only the elements that satisfy a condition.

---

## Syntax

```javascript
array.filter(function(currentValue){

});
```

---

## Returns

A new array.

May be smaller.

May even be empty.

---

## Internal Working

```javascript
const numbers=[1,2,3,4];

numbers.filter(num=>num%2===0);
```

Execution

1 ❌

2 ✅

3 ❌

4 ✅

Output

```javascript
[2,4]
```

---

## Real-Life Example

Shopping Website

Keep products

Price > ₹5000

---

## Project Example

Active Users

```javascript
users.filter(user=>user.active);
```

---

## Truthy & Falsy

filter() keeps values returning true.

Removes values returning false.

Falsy values

false

0

""

null

undefined

NaN

---

## Time Complexity

O(n)

---

## Common Mistakes

❌ Returning object instead of boolean.

Always remember

filter() expects true or false.

---

# When to use filter()

Use filter() when selecting elements.

---

# 3. reduce()

## Definition

reduce() reduces multiple values into a single value.

---

## Syntax

```javascript
array.reduce(function(accumulator,currentValue){

return accumulator;

},initialValue);
```

---

# Important Terms

Accumulator

Stores the running result.

Current Value

Current element.

Initial Value

Starting value.

---

## Example

```javascript
const numbers=[10,20,30];

const sum=numbers.reduce(function(acc,current){

return acc+current;

},0);
```

Execution

0+10=10

10+20=30

30+30=60

Output

60

---

# Why Initial Value Matters

Addition

Start with

0

Multiplication

Start with

1

Array

Start with

[]

Object

Start with

{}

---

# Array Accumulator

```javascript
numbers.reduce((acc,current)=>{

acc.push(current*2);

return acc;

},[]);
```

Output

```javascript
[2,4,6]
```

---

# Object Accumulator

```javascript
const fruits=["Apple","Banana"];

const result=fruits.reduce((acc,current)=>{

acc[current]=true;

return acc;

},{});
```

Output

```javascript
{
Apple:true,
Banana:true
}
```

---

## Real-Life Example

Shopping Cart

Total Price

Salary Calculation

Voting Count

Attendance

Analytics Dashboard

---

## Time Complexity

O(n)

---

## Common Mistakes

❌ Forgetting return accumulator.

❌ Wrong initial value.

❌ Returning nothing.

---

# Comparison

| Feature | map() | filter() | reduce() |
|---------|--------|----------|----------|
| Purpose | Transform | Select | Combine |
| Output | Array | Array | Anything |
| Original Array | Unchanged | Unchanged | Unchanged |
| Return | New Array | New Array | Single Value / Array / Object |

---

# Which one should I use?

Need to transform?

↓

map()

Need to select?

↓

filter()

Need one final value?

↓

reduce()

---

# Interview Questions

Q1

Difference between map() and filter()

Q2

Difference between map() and reduce()

Q3

Why does reduce() require an initial value?

Q4

Can reduce() replace filter()?

Yes.

Q5

Can reduce() replace map()?

Yes.

Q6

Should we always use reduce()?

No.

Use the method that makes the code easiest to understand.

---

# Best Practices

✔ Use map() for transformation.

✔ Use filter() for selection.

✔ Use reduce() for combining values.

✔ Don't mutate original arrays.

✔ Prefer readability over clever code.

---

# Common Mistakes

❌ Using map() without returning a value.

❌ Returning objects in filter() instead of boolean.

❌ Forgetting initial value in reduce().

❌ Forgetting to return accumulator.

---

# Summary

map()

Many → Many

Transforms every element.

filter()

Many → Some

Keeps matching elements.

reduce()

Many → One

Combines everything into one result.

---

# Real Developer Rule

If you can solve a problem using:

map()

filter()

reduce()

without using loops,

you are writing modern JavaScript.

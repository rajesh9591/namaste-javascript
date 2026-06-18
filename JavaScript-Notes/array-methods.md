# Important Array Methods

## 1. find()

Purpose:
Returns the first matching element.

Syntax:

```javascript
array.find(element => condition)
```

Example:

```javascript
const students = [
    {name: "Rajesh", marks: 70},
    {name: "Amit", marks: 90},
    {name: "Rahul", marks: 80}
];

const result = students.find(
    student => student.marks > 80
);

console.log(result);
```

Output:

```javascript
{name: "Amit", marks: 90}
```

Use Case:

* Search for a specific object
* Get student by ID
* Find user details

---

## 2. filter()

Purpose:
Returns all matching elements as a new array.

Syntax:

```javascript
array.filter(element => condition)
```

Example:

```javascript
const result = students.filter(
    student => student.marks >= 80
);

console.log(result);
```

Output:

```javascript
[
    {name: "Amit", marks: 90},
    {name: "Rahul", marks: 80}
]
```

Use Case:

* Remove items
* Search multiple items
* Create a new filtered list

---

## 3. some()

Purpose:
Checks whether at least one element satisfies the condition.

Returns:

```javascript
true
false
```

Syntax:

```javascript
array.some(element => condition)
```

Example:

```javascript
const result = students.some(
    student => student.marks > 95
);

console.log(result);
```

Output:

```javascript
false
```

Use Case:

* Check if data exists
* Validation checks

---

## 4. forEach()

Purpose:
Runs code for every element.

Syntax:

```javascript
array.forEach(element => {
    // code
});
```

Example:

```javascript
students.forEach(student => {
    console.log(student.name);
});
```

Output:

```text
Rajesh
Amit
Rahul
```

Use Case:

* Print data
* Loop through arrays

---

## Quick Revision

find() → First matching item

filter() → All matching items

some() → true/false

forEach() → Loop through all elements
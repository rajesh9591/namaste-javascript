function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function division(a, b) {
    if(b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log("Addition:", add(2, 3));
console.log("Subtraction:", subtract(10, 4));
console.log("Multiplication:", multiply(8, 4));
console.log("Divison:", division(20, 2));
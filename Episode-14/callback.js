function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function calculator(x, y, operation) {
    console.log(operation(x, y));
}

calculator(20, 10, add);
calculator(20, 10, subtract);
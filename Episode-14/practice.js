function multiply(a, b) {
    return a * b;
}

function execute(fn, x, y) {
    console.log(fn(x, y));
}

execute(multiply, 5, 4);
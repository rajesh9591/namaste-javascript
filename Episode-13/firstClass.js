const add = function(a, b) {
    return a + b;
};
function calculate(fn, x, y) {
    console.log(fn(x, y));
}
calculate(add, 10, 20);
